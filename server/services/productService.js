const {Product} = require('../models/models');
const ErrorService = require('./helpers/errorService.js')
const path = require('path')
const fs = require('fs')

class ProductService{
    
    static getAll = async()=>{
        return await Product.findAll();
    }

    static create = async({name, price, image})=>{
        return await Product.create({
            name, price, image
        })
    }
    
    static update = async({id, name, price, image})=>{
        const product = await Product.findOne({where: {id}});
        if(!product)
            throw ErrorService.BadRequest('Product not found');
        
        name = name || product.name;
        price = price || product.price; 

        return await Product.update({
            name, price, image
        }, {where: {id}})
    }

    static delete = async(id)=>{

        // const product = await Product.findOne({where:{id}});
        // let img = product.dataValues.image;
        // let imgPath = path.resolve(__dirname, '..', 'public/assets/img');

        // fs.unlink(`${imgPath}/${img}`, (err)=>{
        //     if (err) throw ErrorService.BadRequest('Product image not found');
        // })
        
        return await Product.destroy({
            where:{id}
        })
    }

}
module.exports = ProductService;