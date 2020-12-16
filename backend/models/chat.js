const mongoose = require('mongoose');

// Chat Schema
const ChatSchema = mongoose.Schema({
    roomTitle: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    members: []
});

module.exports = mongoose.model('Chat', ChatSchema);

module.exports.addChatRoom = function (newChat, callback) {
    newChat.save(callback);
};