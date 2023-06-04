const Chat = require('../models/chat');
const Message = require('../models/message');
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
        return {};
    }
    const lastMsg = await Message.findOne({ _id: messages[messages.length - 1]._id });
    console.log(lastMsg);
    console.log("last message is: ",messages[messages.length - 1]);
    const lastMsgJson = {};
    lastMsgJson["id"] = lastMsg._id;
    lastMsgJson["created"] = lastMsg.created;
    lastMsgJson["content"] = lastMsg.content;
    return lastMsgJson;
}

const addMessage = async (id, sender, content) => {
    const chat = await getChatById(id);
    if (!chat || !chat.messages) return null;
    const message = await serviceMessage.createMessage(sender, content);
    console.log(message);
    let updatedChat = await Chat.findOneAndUpdate(
        { _id: id },
        { $push: { messages: message } },
        { new: true }
    ).exec();
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


const deleteChatById = async (_id) => {
    const chat = await getChatById(_id);
    if (!chat) return null;
    await Promise.all(chat.messages.map(async (message) => {
        return await serviceMessage.deleteMessage(message._id);
    }
    ))
    await Chat.deleteOne({ _id }).exec();
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

module.exports = { getMessagesOfChat, getChatById, getChats, deleteChatById, createChat, addMessage, amInChat, getLastMessage }