const userService = require('../services/user');
const getUsers = async (req, res) => {
    return res.status(200).json(await userService.getUsers());
};
const getUser = async (req, res) => {
    if (!req.body.username || req.body.username === "") {
        return res.status(400).json({ errors: ['Bad Request of User'] });
    }
    const user = await messageService.getUserByName(req.body.username);
    if (!user) {
        return res.status(404).json({ errors: ['User not found'] });
    }
    res.json(user);
};
module.exports = { getUsers, getUser };