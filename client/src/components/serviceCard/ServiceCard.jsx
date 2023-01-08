import React from 'react';
import { IMG_API } from '../../consts';
import Loader from "../loader/Loader";


const ServiceCard = ({data}) => {   

    if(data.length === 0) return <Loader/>
    return (
        <div className="card"> 
        {data.map((item)=>(
            <div className="card-container" key={item.id}>
                <div className="image-container">
                </div>
                <p className="card-title">{item.name}</p>
            </div>
        ))}
        </div>
    )};

export default ServiceCard;