const uuid = require('uuid');
const path = require('path')
const ServicesService = require('../services/servicesService.js');

class ServicesController{
    static create = async(req,res)=>{
        try {
            const {name} = req.body;
            const {image} = req.files;
            let imgName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'public/assets/img/services', imgName))
            let post = await ServicesService.create({name, image: imgName});
            return res.json(post)
        } catch (error) {
            console.error(error)
        }
    }
    static getAll = async(req, res)=>{
        let posts = await ServicesService.getAll()
        return res.json(posts)
    }
    static delete = async(req,res)=>{
        try {
            const {id} = req.params;
            await ServicesService.delete({id})
            return res.json('product deleted')
        } catch (error) {
            
        }
    }
}
module.exports = ServicesController;