import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

export const usersContext = createContext()

const API = 'https://jsonplaceholder.typicode.com/users';

const INIT_STATE = {
    users:[]
};

const reducer = (prevState = INIT_STATE, action) => {
    switch (action.type){
        case 'GET_USERS':
            return {
                ...prevState,
                users: action.payload.data,
            };
        default:
            return prevState;
    };
};

const UsersContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    // const location = useLocation()

    const getUsers = async () => {
        const res = await axios(`${API}`);
        dispatch({
            type: "GET_USERS",
            payload: res, 
        });
    };

    const cloud = {
        getUsers,
        usersArr: state.users,
    }

    return (
        <usersContext.Provider value={cloud}>
            {children}
        </usersContext.Provider>
    );
};

export default UsersContextProvider;