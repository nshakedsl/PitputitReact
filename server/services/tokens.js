const User = require('../models/user');


const login = async (username, password) => {
    const user = await User.findOne({ username, password });
    if (user) {
        const data = { username }
        // Generate the token.
        const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1h' })
        // Return the token to the browser
        return token
    }
    return null


};

module.exports = { login }