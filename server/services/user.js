const User = require('../models/user');

const getUserByName = async (username) => {
    const user = await User.findOne({ username });
    return user;
};
const getUsers = async () => { return await User.find({}); };
const deleteUser = async (username) => {
    const user = await getUserByName(username);
    if (!user) return null;
    await user.remove();
    return user;
};

const createUser = async (username, displayName, profilePic) => {
    const user = await getUserByName(username)
    if (user && user.length !== 0) {
        return null;
    }
    return await User.create({ username, displayName, profilePic });


};

module.exports = { getUserByName, getUsers, deleteUser, createUser }