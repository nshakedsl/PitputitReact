const userService = require('../services/user');
const getUsers = async (req, res) => {
    res.json(await userService.getUsers());
};
const getUser = async (req, res) => {
    const user = await messageService.getUserByName(req.params.username);
    if (!user) {
        return res.status(404).json({ errors: ['User not found'] });
    }
    res.json(user);
};
//...
module.exports = { getUsers,getUser };