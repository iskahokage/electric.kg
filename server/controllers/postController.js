const uuid = require('uuid')
const path = require('path')
const multer = require('multer')
const PostService = require('../services/postService.js');

class PostController{
    static create = async(req,res)=>{
        try {
            const {operationName} = req.body;
            const {operationImage} = req.files
            let imgName = uuid.v4() + ".jpg"
            operationImage.mv(path.resolve(__dirname, '..', 'static', imgName))
            let post = await PostService.create({operationName, operationImage: imgName});
            await post.save()
            return res.json(post)
        } catch (error) {
            console.error(error)
        }
    }
    static getAll = async(req, res)=>{
        let posts = await PostService.getAll()
        return res.json(posts)
    }
    static delete = async(req,res)=>{
        try {
            const {_id} = req.params;
            let deletePost = await PostService.delete({_id})
            return res.json('post deleted')
        } catch (error) {
            
        }
    }
}
module.exports = PostController;