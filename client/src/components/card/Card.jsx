import React from "react";
import Loader from "../loader/Loader";

import { IMG_API } from "../../consts";
const Card = ({ data }) => {
    if(data.length === 0) return <Loader/>
    return (
        <div className="card"> 
        {data.map((item)=>(
            <div className="card-container" key={item.id}>
                <div className="image-container">
                    <img
                        src={ IMG_API + item.image}
                        alt=""
                    />
                </div>
                <p className="card-title">{item.name}</p>
                <p className="card-title">{item.price} сом</p>
            </div>
        ))}
        </div>
    );
};

export default Card;
