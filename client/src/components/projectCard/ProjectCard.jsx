import React from 'react';
import './ProjectCard.scss'

const ProjectCard = () => {
    return (
        <div className='projectCard'>
            <div className="slider-container">
                <div className="project-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Mossekanalen_01_480px.JPG" alt="" />
                </div>
            </div>
            <div className="info-container">
                <div className='project-container'>
                    <p className="project-title">Швейный цех на улице Абая/Горького</p>
                    <ul className="project-details">
                        Проделанные работы:
                        <li>Монтаж и установка освещения</li>
                        <li>Монтаж и установка навесных панелей</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;