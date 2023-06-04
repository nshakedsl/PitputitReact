const Chat = require('../models/chat');
const serviceMessage = require('./message');
const { getUserByName } = require('./user');
const { ObjectId } = require('mongodb');

const getMessagesOfChat = async (id) => {
    const chat = await getChatById(id);
    if (!chat || !chat.messages) return null;
    return chat.messages;
};

const getLastMessage = async (id) => {
    const messages = await getMessagesOfChat(id);
    console.log("messages is",messages);
    if(!messages || messages.length === 0){
        return null;
    }
    console.log("last message is: ",messages[messages.length - 1]);
    return messages[messages.length - 1];
}

const addMessage = async (id, sender, content) => {
    const chat = await getChatById(id);
    if (!chat || !chat.messages) return null;
    const message = await serviceMessage.createMessage(sender, content);
    Chat.findOneAndUpdate(
        { _id: id },
        { $push: { messages: message } },
        { new: true }
    );
    return message;
};
const createChat = async (sender, reciever) => {
    let messages = [];
    const user1 = await getUserByName(sender);
    const user2 = await getUserByName(reciever);
    if (!user1 || !user2) {
        return null;
    }
    const users = [user1, user2];
    const chat = await Chat.create({ messages, users });
    return await chat.save();
};
const getChatById = async (id) => {
    try {
        return await Chat.findById(id);

    } catch (err) {
        console.log('err: ', err);
        return null;
    }

};
const getChats = async () => { return await Chat.find({}); };
const deleteChatById = async (id) => {
    const chat = await getChatById(id);
    chat.messages.map(async (message) => {
        return await serviceMessage.deleteMessage(message._id);
    });
    if (!chat) return null;
    await chat.remove();
    return chat;
};
const amInChat = (id, chat) => {
    if (chat.users[0].equals(id)) {
        return true;
    }
    if (chat.users[1].equals(id)) {
        return true;
    }
    return false;
};

module.exports = { getMessagesOfChat, getChatById, getChats, deleteChatById, createChat, addMessage, amInChat,getLastMessage }