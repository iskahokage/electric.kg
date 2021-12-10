const express = require('express');
const Post = require ('../schemas/postShema.js')


const router = express.Router();

router.post('/', async(req,res)=>{
    const post = new Post({
        operationName: req.body.operationName,
        operationImage: req.body.operationImage
    })
    const savedPost = await post.save()
    res.json(savedPost)
})
module.exports = router;