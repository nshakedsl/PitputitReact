const Chat = require('../models/chats');
const { getUserByName } = require('./user');

let counter = 0;
function generateUniqueId() {
    const timestamp = new Date().getTime();
    const uniqueId = timestamp + counter;
    counter++;
    return uniqueId;
}


const createChat = async (sender, reciever) => {
    const id = generateUniqueId();
    let messages = [];
    const user1 = getUserByName(sender);
    const user2 = getUserByName(reciever);
    if(!user1 || !user2){
        return null;
    }
    const users = [user1, user2];
    const chat = new Chat({ id:id, messages: messages, users: users });
    return await chat.save();
};
const getChatById = async (id) => { return await Chat.findById(id); };
const getChats = async () => { return await Chat.find({}); };
const deleteChatById = async (id) => {
    const chat = await getchatById(id);
    if (!chat) return null;
    await chat.remove();
    return chat;
};
module.exports = { getChatById, getChats, deleteChatById,createChat }