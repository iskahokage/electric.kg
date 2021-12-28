const mongoose = require('mongoose')

const MessageShema = mongoose.Schema({
    email: String,
    phone: String,
    message: String
})

module.exports = mongoose.model('Messages', MessageShema)