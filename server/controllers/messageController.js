const MessageService = require('../services/messageService.js');

class MessageController{
    static getAll = async(req,res)=>{
        try {
            let messages = await MessageController.getAll()
            return res.json(messages)
        } catch (error) {
            console.error(error)
        }
    }
    static create = async(req,res)=>{
        try {
            let {email,phone, message} = req.body;
            let createMessage = await MessageService.create({email,phone, message});
            await createMessage.save();
            return res.json(createMessage);
        } catch (error) {
            console.error(error)
        }
    }
    static delete = async(req,res)=>{
        try {
            const {_id} = req.params
            const deletePost = MessageService.delete({_id})
            return res.json('message deleted')

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = MessageController