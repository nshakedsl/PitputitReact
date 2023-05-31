const mongoose = require('mongoose');
const User = require('./user');

const Schema = mongoose.Schema;
const Message = new Schema({
    id: {
        type: integer($int32)
    },
    created: {
        type: string($date-time)
    },
    sender: User,
    content: {
        type: String,
        nullable: true
    }
});
module.exports = mongoose.model('message', Message);