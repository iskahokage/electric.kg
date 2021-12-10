import React from 'react';
import LightningImage from './../../assets/images/lightning.png';
const Message = () => {
    return (
        <div className='message'>
            <div className='message-container'>
                <form className='message-form' action="">
                    <div className="title-container">
                        <img src={LightningImage} alt="" className='message-icon'/>
                        <p>Оставьте свое обращение</p>
                    </div>
                    <input className='message-input email' type="email" maxLength="40"  name="" id="" placeholder='Введите email' />
                    <input className='message-input number' type="tel" maxLength="10" placeholder='Введите номер телефона' />
                    <textarea className='message-input text' type="text" rows="4" placeholder='Введите сообщение'></textarea>
                </form>
            </div>
        </div>
    );
};

export default Message;