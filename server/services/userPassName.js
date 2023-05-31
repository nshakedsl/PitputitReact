const userPassName = require('../models/userPassName');
const userUtils = require('./user');
const createUserPassName = async (senderName, password, displayName, profilePic) => {
    const user = userUtils.createUser(senderName, displayName, profilePic);
    const userPass = new userPassName({ password,user });
    return userPass;
};

module.exports = { createUserPassName }