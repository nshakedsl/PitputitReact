const mongoose = require('mongoose');
const User = require('./user');
const Message = require('./message');

const Schema = mongoose.Schema;
const Message = new Schema({
    id: {
        type: integer($int32)
    },
    users: {
        type: [User],
        nullable: true
    },
    messages: {
        type: [Message],
        nullable: true
    }
});
module.exports = mongoose.model('chat', Chat);