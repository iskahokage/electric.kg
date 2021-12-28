const Messages = require('../schemas/messageSchema.js');

class MessageService{
    static getAll = async()=>{
        return await Messages.find()
    }
    static create = async({email, phone, message})=>{
        return await Messages.create({
            email: email,
            phone: phone, 
            message: message
        })
    }
    static delete = async(_id)=>{
        return await Messages.deleteOne({
            _id: _id
        })
    }
}

module.exports = MessageService;