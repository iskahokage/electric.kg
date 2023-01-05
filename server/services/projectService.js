const {Project, Project_image} = require('../models/models.js')

class ProjectService{

    static getAll = async()=>{
        return await Project.findAll({include: ["project_images"]});
    }

    static create = async({name, description})=>{
        return await Project.create({
            name, description
        })
    }
    static delete = async (id)=>{
        const image = await Project_image.findAll({where: {projectId: id}})
        const item = await Project.destroy({where: {id}})

        return [image, item]
    }

    static imageUpload = async({name, projectId})=>{
        return await Project_image.create({
            name, projectId
        })
    }
}



module.exports = ProjectService;
