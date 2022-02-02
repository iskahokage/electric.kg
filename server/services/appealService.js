const {Appeal} = require('../models/models.js');

class AppealService{
    static create = async({name, phone, content})=>{
        return await Appeal.create({
            name, phone, content
        })
    }
}

module.exports = AppealService