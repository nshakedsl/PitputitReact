const User = require('../models/user');

const getUserByName = async (username) => { return await User.find({}).select({ username }); };
const getUsers = async () => { return await User.find({}); };
const deleteUser = async (username) => {
    const user = await getUserByName(username);
    if (!user) return null;
    await user.remove();
    return user;
};

const createUser = async (senderName, displayName, profilePic) => {
    const user = new User({ username: senderName, displayName, profilePic });
    return user;
};

module.exports = { getUserByName, getUsers, deleteUser, createUser }