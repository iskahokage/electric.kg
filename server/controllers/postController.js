const PostService = require('../services/postService.js');

class PostController{
    static create = async(req,res)=>{
        try {
            let {operationName, operationImage} = req.body;
            let post = await PostService.create({operationName, operationImage});
            return res.json(await post.save())
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