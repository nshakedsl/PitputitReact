const User = require('../models/user');


const login = async (username, password) => {
    const user = await User.find({}).select({ username, password });
    console.log('user: ', user);
};

module.exports = { login }