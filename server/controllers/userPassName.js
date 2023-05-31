const userPassNameService = require('../services/userPassName');
const userService = require('../services/user');

const registerUser = async (req, res) => {

    if (!req.body.password.length < 8) {
        return res.status(400).json({ errors: ['Password must contain at least 8 characters'] });

    } else if (!/[0-9]/.test(!req.body.password) || !/[a-z]/.test(!req.body.password) || !/[A-Z]/.test(!req.body.password)) {
        return res.status(400).json({ errors: ['Password must contain a combination of uppercase and lowercase letters and numbers'] });  

    } else if (!/^[a-zA-Z0-9\._:\-\?!]+$/.test(req.body.username) || !/^[a-zA-Z0-9\._:\-\?!]+$/.test(req.body.displayName) || !/^[a-zA-Z0-9\._:\-\?!]+$/.test(req.body.password)) {
        return res.status(400).json({ errors: ['You choose invalid characters'] });   

    } else if (req.body.profilePic === 'images/user.png') {
        return res.status(400).json({ errors: ['image is a mandatory field'] });   

    } else if (req.body.username.length < 2 || req.body.displayName.length < 2){
        return res.status(400).json({ errors: ['inputs must contain at least 2 characters'] }); 

    } else if (req.body.username.length > 32 || req.body.displayName.length > 32 || req.body.password.length > 32){
        return res.status(400).json({ errors: ['inputs must contain until 32 characters'] }); 

    } else if (userService(req.body.username)){
        return res.status(400).json({ errors: ['username already taken'] }); 
    }
    // try {
    //     let res = await register(newUser);
    //     if (res.ok) {
    //         //Todo: Ofir do if it's ok - good!
    //     }

    // } catch (err) {
    //    return res.status(404).json({ errors: ['err: ', err] });

    // }
    const user = userPassNameService.createUserPassName(req.body.username,req.body.password,req.body.displayName,req.body.profilePic);
    if(!user) {
        return res.status(400).json({ errors: ['error creating user'] }); 
    }
    res.json(user);

};
//...
module.exports = { registerUser };




