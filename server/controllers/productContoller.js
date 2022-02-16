const ProductService = require('../services/productService.js')
const path = require('path')
const uuid = require('uuid')

class ProductController {

    static getAll = async(req,res,next)=>{
        try {
            const products = await ProductService.getAll()
            return res.json(products)
        } catch (error) {
            next(error)
        }
    }
    static create = async(req,res,next)=>{
        try {
            const {name, price} = req.body;
            const {image} = req.files;
            let imgName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'public/assets/img/products', imgName))
            const product = await ProductService.create({name, price, image: imgName, })
            return res.json(product)

        } catch (error) {
            next(error)
        }
    }

    static update = async(req,res,next)=>{
        try {
            const {id} = req.params;
            const {name, price} = req.body;
            await ProductService.update({name, price, id})
            res.json({msg: 'updated'})
        } catch (error) {
            next(error)
        }
    }

    static delete = async(req,res, next)=>{
        try {
            const {id} = req.params;
            await ProductService.delete(id)
            return res.json(`deleted product with id: ${id}`)
        } catch (error) {
            
        }
    }

}

module.exports= ProductController