const {Project, Project_image} = require('../models/models.js')

class ProjectService{

    static getAll = async()=>{
        return await Project.findAll();
    }

    static create = async({name, description})=>{
        return await Project.create({
            name, description
        })
    }
    static delete = async (id)=>{
        return await Project.destroy({where: {id}})
    }

    static imageUpload = async({name, projectId})=>{
        return await Project_image.create({
            name, projectId
        })
    }
}



module.exports = ProjectService;
