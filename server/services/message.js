const Message = require('../models/message');

const getMessageById = async (id) => { return await Message.findById(id); };
const deleteMessage = async (id) => {
    const message = await getmessageById(id);
    if (!message) return null;
    await message.remove();
    return message;
};
module.exports = { getMessageById, deleteMessage }