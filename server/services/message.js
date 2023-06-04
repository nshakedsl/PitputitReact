const Message = require('../models/message');
const User = require('../models/user');
const { jsonifyUser } = require('./user');

const createMessage = async (sender, content) => {
    const created = new Date().getTime();
    try {
        const message = await Message.create({ created, sender, content });
        return message;
    } catch (err) {
        console.log('err: ', err);
    }
};
const getMessageById = async (id) => { return await Message.findById(id); };
const deleteMessage = async (_id) => {
    const message = await getMessageById(_id);
    if (!message) return null;
    await Message.deleteOne({ _id }).exec();
    return message;
};

const jsonifyMessage = async (id) => {
    const msg = await Message.findOne({ _id: id });
    const msgJson = {};
    msgJson["id"] = msg._id;
    console.log('msg: ', msg);
    msgJson["created"] = msg.created;
    msgJson["sender"] = await jsonifyUser(msg.sender);
    msgJson["content"] = msg.content;
    console.log('msgJson: ', msgJson);
    return msgJson;
}
module.exports = { getMessageById, deleteMessage, createMessage, jsonifyMessage }