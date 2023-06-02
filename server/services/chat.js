const Chat = require('../models/chat');
const { serviceMessage } = require('./message');
const { getUserByName } = require('./user');


const getMessagesOfChat = async (id) => {
    const chat = await getChatById(id);
    if (!chat || !chat.messages) return null;
    return chat.messages;
};
const addMessage = async (id, senderName, content) => {
    const chat = await getChatById(id);
    if (!chat || !chat.messages) return null;
    const message = serviceMessage.createMessage(senderName, content);
    Chat.findOneAndUpdate(
        { _id: id },
        { $push: { messages: message } },
        { new: true }
    );
    return true;
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
const amInChat = (name, chat) => {
    chat.users.forEach((element, index) => {
        if (element === name) {
            return true;
        }
    });
    return false;
};

module.exports = { getMessagesOfChat, getChatById, getChats, deleteChatById, createChat, addMessage, amInChat }