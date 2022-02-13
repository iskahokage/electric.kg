import React, { useState } from 'react';
import './ContactUs.scss';
import axios from 'axios'
const ContactUs = () => {
    const [state, setState] = useState(false)
    function closeForm(){
        setState(true)
        
    }   
    return (
        <div className='contactUs-container'>
            <span className='close-btn' onClick={closeForm}>&#10006;</span>
            <form action="" onClick={(e)=>{
                e.preventDefault()
            }}>
                <input type="text" name="" id="form-inputs" placeholder='Введите имя' />
                <input type="text" name="" id="form-inputs" placeholder='Введите номер телефона'/>
                <textarea name="" id="form-inputs" cols="20" rows="20" placeholder='Напишите что нужно сделать'></textarea>
                <button>Отправить</button>
            </form>
        </div>
    );
};

export default ContactUs;   