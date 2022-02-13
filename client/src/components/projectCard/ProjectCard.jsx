import React, { useState } from "react";
import { IMG_API } from "../../consts";
import Loader from "../loader/Loader";
import "./ProjectCard.scss";

const ProjectCard = ({ data }) => {

    if(data.length === 0) return <Loader/>
    return (
        <>
            {data.map((item) => (
                <div className="projectCard" key={item.id}>
                    <div className="slider-container">
                        <div className="project-container">
                            {item.project_images.map((img)=>(
                                <img key={img.id} src={IMG_API + img.name} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="project-container">
                            <p className="project-title">
                                {item.name}
                            </p>
                            <ul className="project-details">
                                Проделанные работы:
                                <li>{item.description}</li>
                                <li>Монтаж и установка навесных панелей</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCard;
