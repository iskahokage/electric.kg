import React, { useContext, useState } from "react";
import LightningImage from "./../../assets/images/lightning.png";
import { messageContext } from "../../context/MessageContext.jsx";

const Message = () => {
  const { messages, createMessage } = useContext(messageContext);

  const [inpEmail, setInpEmail] = useState("");
  const [inpPhone, setInpPhone] = useState("");
  const [inpMessage, setInpMessage] = useState("");

  function handleClick(){
      let newMessage = {
          email: inpEmail,
          phone: inpPhone,
          message: inpMessage
      };
      console.log(`=============success=============`)
      createMessage(newMessage)
      setInpEmail('')
      setInpPhone('')
      setInpMessage('')
  }


  return (
    <div className="message">
      <div className="message-container">
        <form className="message-form" action="">
          <div className="title-container">
            <img src={LightningImage} alt="" className="message-icon" />
            <p>Оставьте свое обращение</p>
          </div>
          <input
            className="message-input"
            value={inpEmail}              
            onChange={e=>setInpEmail(e.target.value)}  
            type="text"
            maxLength="40"
            placeholder="Введите email"
          />
          <input
            className="message-input"
            value={inpPhone}              
            onChange={e=>setInpPhone(e.target.value)}
            type="text"
            maxLength="10"
            placeholder="Введите номер телефона"
          />
          <textarea
            className="message-input"
            value={inpMessage}              
            onChange={e=>setInpMessage(e.target.value)}
            type="text"
            rows="4"
            placeholder="Введите сообщение"
          ></textarea>
          <button className="button is-link is-light" onClick={e=>handleClick(e.preventDefault)}>Оставить обращение</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
