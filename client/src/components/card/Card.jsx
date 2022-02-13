import React from 'react';
import './Card.scss'

const Card = () => {
    return (
        <div className='card'>
            <div className="image-container">
                <img src="https://look.com.ua/pic/201209/240x320/look.com.ua-29395.jpg" alt="" />
            </div>
            <p className="card-title">
                Монтаж и установка люстр
            </p>
        </div>
    );
};

export default Card;