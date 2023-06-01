const User = require('../models/user');


const login = async (username, password) => {
    const user = await User.findOne({ username, password });
    if (user) {
        const data = { username }
        // Generate the token.
        const token = jwt.sign(data, key)
        // Return the token to the browser
        res.status(201).json({ token });

    }
    return null


    console.log('user: ', user);
};

module.exports = { login }