const ProjectService = require('../services/projectService');
const path = require('path')
const uuid = require('uuid')
const fs = require('fs')

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
            name.mv(path.resolve(__dirname, '..', 'public/assets/img', imgName))
            let img = await ProjectService.imageUpload({name: imgName, projectId})
            return res.json(img)
        } catch (error) {
            next(error)
        }
    }
    static delete = async(req,res, next)=>{
        try {
            const {id} = req.params;
            let files = await ProjectService.delete(id)
            for(let i = 0; i < files[0].length; i++){
                let a = path.resolve(__dirname, '..', 'public/assets/img')
                let b = files[0][i].name
                fs.unlink(`${a}/${b}`, (err) => {
                    if (err) throw err;
                    console.log(`${a}/${b} was deleted`);
                    })
            }
            res.json({msg: `post with id: ${id}, successfully deleted `})
        } catch (error) {
            
        }
    }
}



module.exports = ProjectController;