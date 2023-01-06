import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Admin from '../components/admin/Admin';
import { API } from '../consts';

export const authContext = createContext()



const INIT_STATE ={
    users: [],
    isAuth: false
}

const reducer = (state=INIT_STATE, action) =>{
    console.log(action)
    switch (action.type) {
        case "LOGIN_USER":
            return{
                ...state,
                users: action.payload,
                isAuth: true
            }
        case "CHECK_USER":
            return{
                ...state,
                users: action.payload?.user,
                isAuth: action.payload?.isAuth
            }
        default:
            break;
    }
}

const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const navigate = useNavigate();
    

    useEffect(()=> {
        const checkLoggedIn = async () => {
			const user = isAuthenticated();

            if(user && user.accessToken){
                dispatch({
                    type: "CHECK_USER",
                    payload: {
                        isAuth: true,
                        user
                    }
                })
            }
		};

		checkLoggedIn();
    }, [state.isAuth])



    const login = async(authData)=>{
        const {data} = await axios.post(`${API}/login`, authData, {withCredentials: true})
        dispatch({
            type: "LOGIN_USER",
            payload: data
        })

        const token = data.accessToken;

        if(token){
            localStorage.setItem('user', JSON.stringify(data))
        }

        navigate('/')
    }
    function isAuthenticated () {
        const user = localStorage.getItem('user');
        if(!user){
            return 
        }
        return JSON.parse(user);
    }

    const logout = () => {

        const {data} = axios(`${API}/logout`, {withCredentials: true})
        localStorage.removeItem('user')
        dispatch({
            type: "CHECK_USER",
            payload: data
        })
        navigate('/goods')


    }

    return (
        <authContext.Provider
            value={{
                users: state.users,
                isAuth: state.isAuth,
                login,
                logout
            }}
        >
            { children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;