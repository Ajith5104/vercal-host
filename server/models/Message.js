// models/Message.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    messageContent: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Message', MessageSchema);
