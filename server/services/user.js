const User = require('../models/user');

const getUserByName = async (username) => { return await User.findByUsername(username); };
const getUsers = async () => { return await User.find({}); };
const deleteUser = async (id) => {
    const user = await getUserByName(username);
    if (!user) return null;
    await user.remove();
    return user;
};
module.exports = { getUserByName, getUsers, deleteUser }