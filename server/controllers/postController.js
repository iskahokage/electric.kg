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
}
module.exports = PostController;