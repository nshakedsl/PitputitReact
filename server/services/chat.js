const Chat = require('../models/chat');
const { serviceMessage } = require('./message');
const { getUserByName } = require('./user');

let counter = 0;
function generateUniqueId() {
    const timestamp = new Date().getTime();
    const uniqueId = timestamp + counter;
    counter++;
    return uniqueId;
}
const getMessagesOfChat = async (id) => {
    const chat = await getchatById(id);
    if (!chat || !chat.messages) return null;
    return chat.messages;
};
const addMessage = async (id, senderName, content) => {
    const chat = await getchatById(id);
    if (!chat || !chat.messages) return null;
    const message = serviceMessage.createMessage(senderName, content);
    Chat.findOneAndUpdate(
        { id },
        { $push: { messages: message } },
        { new: true }
    );
    return true;
};
const createChat = async (sender, reciever) => {
    const id = generateUniqueId();
    let messages = [];
    const user1 = getUserByName(sender);
    const user2 = getUserByName(reciever);
    if (!user1 || !user2) {
        return null;
    }
    const users = [user1, user2];
    const chat = new Chat({ id, messages, users });
    return await chat.save();
};
const getChatById = async (id) => { return await Chat.findById(id); };
const getChats = async () => { return await Chat.find({}); };
const deleteChatById = async (id) => {
    const chat = await getchatById(id);
    await chat.messages.map(message => {
        return serviceMessage.deleteMessage(message.id);
    });
    if (!chat) return null;
    await chat.remove();
    return chat;
};
module.exports = { getMessagesOfChat, getChatById, getChats, deleteChatById, createChat, addMessage }