import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { API } from '../consts';
export const messageContext = createContext()

const INIT_STATE = {
    messages: ''
}

const reducer = (state = INIT_STATE, action) =>{
    switch (action.type){
        case "GET_MESSAGE":
                return{
                    ...state,
                    messages: action.payload.data
                }
        default:
            break;
    }
}

const MessageContextProvider = ({children}) => {

        const [state, dispatch] = useReducer(reducer, INIT_STATE);

        const getMessage = async()=>{
            let message = await axios(`${API}/messages`)
            dispatch({
                type: "GET_MESSAGE",
                payload: message
            })
        }

        const createMessage = (newMessage)=>{
            axios.post(`${API}/messages`, newMessage)
        }
        const deleteMessage = async(id)=>{
            await axios.delete(`${API}/messages/${id}`)
            getMessage()
        }


    return (
        <messageContext.Provider
            value={{
                messages: state.messages,
                getMessage,
                createMessage,
                deleteMessage
            }}
        >
            {children}
        </messageContext.Provider>
    );
};

export default MessageContextProvider;