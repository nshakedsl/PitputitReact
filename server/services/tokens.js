const User = require('../models/user');


const login = async (username, password) => {
    const user = await User.findOne({ username, password });
    console.log('user: ', user);
};

module.exports = { login }