const Posts = require('../schemas/postShema.js')

class PostService {
    static findAll = async({operationName, operationImage})=>{
        return await Posts.findOne({operationName: operationName, operationImage: operationImage})
    }
    static getAll = async()=>{
        return await Posts.find()
    }   
    static create = async({operationName, operationImage})=>{
        return await Posts.create({
            operationName: operationName,
            operationImage: operationImage
        })
    }
    static delete = async({_id})=>{
        return await Posts.deleteOne({
            _id: _id
        })
    }
}
module.exports = PostService;