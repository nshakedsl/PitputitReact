const User = require('../models/user');

const getUserByName = async (username) => { return await User.find({}).select({ username });; };
const getUsers = async () => { return await User.find({}); };
const deleteUser = async (username) => {
    const user = await getUserByName(username);
    if (!user) return null;
    await user.remove();
    return user;
};

const createUser = async () => {

};

module.exports = { getUserByName, getUsers, deleteUser }