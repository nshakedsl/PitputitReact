const tokenService = require('../services/token');

const login = async (req, res) => {
    if (!req.body.username || req.body.username === "" || !req.body.password || req.body.password === "") {
        return res.status(400).json({ errors: ['All fields must be initialized'] });
    }
    const ans = tokenService.login(req.body.username,req.body.password);
    if(!ans){
        return res.status(404).json({ errors: ['username or password incorrect'] });
    }
    return res.status(200).json(ans);
};
module.exports = { login };