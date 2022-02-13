import React, { useContext, useEffect } from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { projectContext } from '../../context/projectContext';
import './Projects.scss';

const Projects = () => {

    const {projects, getProjects} = useContext(projectContext)


    useEffect(()=>{
        getProjects();
    }, [])
    console.log(projects);
    return (
        <div className='container'>
            <p className='title'>Выполненные оъекты:</p>
            <ProjectCard data={projects}/>
        </div>
    );
};

export default Projects;