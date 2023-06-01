const UserPassName = require('../models/userPassName');
const userService = require('./user');

const login = async (username, password) => {
    try {
        const userObj = await userService.getUserByName(username);
        if(!userObj){
            return null;
        }
        console.log('password: ', password);
        console.log('username: ', username);
        const user = await UserPassName.findOne({
            user: userObj,
            password: password
        });

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