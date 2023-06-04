const chatService = require('../services/chat');
const userService = require('../services/user');
const JSONIFY = async (chat) => {
    if (!chat) {
        return {};
    }
    const result = {};
    const users = [];
    result["id"] = chat._id;
    await Promise.all(chat.users.map(async (ref) => {
        let temp = await userService.jsonifyUser(ref);
        users.push(temp);
    }
    ))
    result["users"] = users;
    const lastMsgId = await chatService.getLastMessage(chat);
    result["lastMessage"] = lastMsgId;
    console.log(lastMsgId);
    //todo: deal with empty message
    return result;
};
const getChats = async (req, res) => {
    if (!req.user || !req.user.userObj || !req.user.userObj.username) {
        return res.status(405).json({ errors: ['congradulations, you broke the code with your token'] });
    }
    const me = req.user.userObj;
    let chats = await chatService.getChats()
    if (chats) {
        chats = chats.filter(element => chatService.amInChat(me._id, element))
    } else {
        chats = []
    }
    let temp = await JSONIFY(chats[0])
    res.json(temp);
};
const addChatMessage = async (req, res) => {
    console.log("addChatMessage");
    if (!req.params.id) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    if (!req.body.msg || !req.body.msg === '') {
        return res.status(403).json({ errors: ['illegal msg'] });
    }
    if (!req.user || !req.user.userObj || !req.user.userObj.username) {
        return res.status(405).json({ errors: ['congradulations, you broke the code with your token'] });
    }
    const sender = req.user.userObj
    const result = await chatService.addMessage(req.params.id, sender, req.body.msg);
    if (!result) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    return res.status(200).json({ id: result._id, created: result.created, content: result.content, sender });
};

const getChat = async (req, res) => {
    console.log("getChat");
    if (!req.user || !req.user.userObj || !req.user.userObj.username) {
        return res.status(405).json({ errors: ['congradulations, you broke the code with your token'] });
    }
    if (!req.params.id) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    const chat = await chatService.getChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    if (!chatService.amInChat(req.user.userObj._id, chat)) {
        return res.status(401).json({ errors: ['Unauthorized Request of Chat'] });
    }
    res.json(chat);
};
const getChatMessages = async (req, res) => {
    if (!req.user || !req.user.userObj || !req.user.userObj.username) {
        return res.status(405).json({ errors: ['congradulations, you broke the code with your token'] });
    }
    if (!req.params.id) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    const chat = await chatService.getChatById(req.params.id);
    if (chat) {
        if (!chatService.amInChat(req.user.userObj._id, chat)) {
            return res.status(401).json({ errors: ['Unauthorized Request'] });
        }
        const chatMessages = await chatService.getMessagesOfChat(req.params.id);
        if (!chatMessages) {
            return res.status(404).json({ errors: ['Chat Messages not found'] });
        }
        res.json(chatMessages);
    } else {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
};
const deleteChat = async (req, res) => {
    if (!req.user || !req.user.userObj || !req.user.userObj.username) {
        return res.status(405).json({ errors: ['congradulations, you broke the code with your token'] });
    }

    if (!req.params.id) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    const chat = await chatService.deleteChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    if (!chatService.amInChat(req.user.userObj._id, chat)) {
        return res.status(401).json({ errors: ['Unauthorized Request'] });
    }
    res.status(200).json({})
};
const createChat = async (req, res) => {
    console.log("createChat");
    if (!req.user || !req.user.userObj || !req.user.userObj.username) {
        return res.status(405).json({ errors: ['congradulations, you broke the code with your token'] });
    }
    const me = req.user.userObj.username;
    if (!req.body.username) {
        return res.status(402).json({ errors: ['username field is mandatory'] });
    }
    if (req.user.userObj.username === req.body.username) {
        return res.status(403).json({ errors: ['stop talking to yourself you wierdo'] });
    }
    const retVal = await userService.getUserByName(req.body.username);
    if (!retVal) {
        return res.status(400).json({ errors: ['User does not exists'] });
    }
    const chat = await chatService.createChat(req.body.username, me);
    if (!chat) {
        return res.status(404).json({ errors: ['error when creating chat'] });
    }
    return res.status(200).json(chat);
};
module.exports = { addChatMessage, getChatMessages, createChat, getChats, getChat, deleteChat };