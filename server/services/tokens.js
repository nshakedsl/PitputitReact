const UserPassName = require('../models/userPassName');


const login = async (username, password) => {
    try {





        console.log('password: ', password);
        console.log('username: ', username);
        const user = await UserPassName.findOne({
            'user.username': username,
            password: password
        }).populate('User');

        console.log('user: ', user);
        if (user) {
            const data = { username }
            // Generate the token.
            const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1h' })
            console.log('token: ', token);
            // Return the token to the browser
            return token
        }
        return null
    } catch (err) {
        console.log('err: ', err);

    }


};

module.exports = { login }