// const {} = require('../schemas/messageSchema.js');

class MessageService{
    static getAllMessages = async()=>{
        return await MessageSchema.find()
    }
    static createMessage = async({email, phone, message})=>{
        return await MessageSchema.create({
            email: email,
            phone: phone, 
            message: message
        })
    }
    static deleteMessage = async(_id)=>{
        return await MessageSchema.deleteOne({
            _id: _id
        })
    }
}

module.exports = MessageService;