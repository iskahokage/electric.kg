import React, { useState } from 'react';
import './ContactUs.scss';
import tgLogo from '../../assets/tg-ico.svg'
import ig from '../../assets/ig-logo.svg'
import axios from 'axios';


const ContactUs = () => {
    const [state, setState] = useState(false);
    
    function showForm(){
        setState(true)
    }

    function hideForm(){
        setState(false)
    }
    
    function postAppeal(){
        alert('Ваше обращение записано!')
    }
    if(state === false) 
    return(
        <>
            <img className='social tg' onClick={()=>showForm()} src={tgLogo} alt='tg-ico'/>
            <a href="https://www.instagram.com/electromontaj_312/">
                    <img className='social ig' src={ig} alt="" />
            </a>
        </>
    );
    return (
        <div className='contactUs-container'>
            <span className='close-btn' onClick={()=>hideForm()}>&#10006;</span>
            <form action="" onClick={(e)=>{
                e.preventDefault()
            }}>
                <input type="text" name="" id="form-inputs" required='true' placeholder='Введите имя' />
                <input type="text" name="" id="form-inputs" required='true' placeholder='Введите номер телефона'/>
                <textarea name="" id="form-inputs" cols="20" rows="20" placeholder='Напишите что нужно сделать'></textarea>
                <button onClick={()=>postAppeal()}>Отправить</button>
            </form>
        </div>
    );
};

export default ContactUs;   