const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;
const UserPassName = new Schema({
    password: {
        type: String,
        nullable: true
    },
    user: User
});
module.exports = mongoose.model('userPassName', UserPassName);