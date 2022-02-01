const ProjectService = require('../services/projectService');
const path = require('path')
const uuid = require('uuid')


class ProjectController{

    static getAll = async(req,res,next)=>{
        try {
            const projects = await ProjectService.getAll()
            return res.json(projects)
        } catch (error) {
            next(error)
        }
    }

    static create = async(req,res,next)=>{
        try {
            const {name, description} = req.body;
            const project = await ProjectService.create({name, description})
            return res.json(project)

        } catch (error) {
            next(error)
        }
    }
    static imageUpload = async(req,res,next)=>{
        try {
            const {name} = req.files
            const {projectId} = req.body
            let imgName = uuid.v4() + ".jpg"
            name.mv(path.resolve(__dirname, '..', 'static', imgName))
            let img = await ProjectService.imageUpload({name: imgName, projectId})
            return res.json(img)
        } catch (error) {
            next(error)
        }
    }
    static delete = async(req,res, next)=>{
        try {
            const {id} = req.params;
            await ProjectService.delete(id)
            return res.json(`deleted project with id: ${id}`)
        } catch (error) {
            
        }
    }
}



module.exports = ProjectController;