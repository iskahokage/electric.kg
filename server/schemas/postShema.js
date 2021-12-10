const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    operationName: String,
    operationImage: String,
})


module.exports = mongoose.model('Posts', PostSchema);