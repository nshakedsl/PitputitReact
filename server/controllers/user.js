const userService = require('../services/user');

const getUser = async (req, res) => {
    if(!req.user || !req.user.userObj || !req.user.userObj.username){
        return res.status(405).json({ errors: ['congradulations, you broke the code with your token'] });
    }
    const me = req.user.userObj.username;
    if (!req.body.username || req.body.username === "") {
        return res.status(400).json({ errors: ['Bad Request of User'] });
    }
    if (me !== req.body.username){
        return res.status(401).send("Unauthorized");
    }
    const user = await userService.getUserByName(req.body.username);
    if (!user) {
        return res.status(404).json({ errors: ['User not found'] });
    }
    res.json(user);
};
module.exports = { getUser };