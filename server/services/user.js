const User = require('../models/user');
const jsonifyUser = async (userRef) => {
    const userJson = {};
    const user = await User.findOne({ _id: userRef });
    if (!user) {
        return null;
    }
    userJson["username"] = user.username;
    userJson["displayName"] = user.displayName;
    userJson["profilePic"] = user.profilePic;
    return userJson;
}

const getUserByName = async (username) => {
    const user = await User.findOne({ username });
    return user;
};
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

module.exports = { getUserByName, deleteUser, createUser, jsonifyUser }