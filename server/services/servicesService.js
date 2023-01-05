const {Service} = require('../models/models.js')

class ServicesService {
    static getAll = async()=>{
        return await Service.findAll()
    }   
    static create = async({name, image})=>{
        return await Service.create({
            name, image
        })
    }
    static delete = async({id})=>{
        return await Service.deleteOne({
            id
        })
    }
}
module.exports = ServicesService;