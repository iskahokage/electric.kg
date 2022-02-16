import React, { useContext, useEffect } from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { projectContext } from '../../context/projectContext';
import './Projects.scss';

const Projects = () => {

    const {projects, getData} = useContext(projectContext)


    useEffect(()=>{
        getData();
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