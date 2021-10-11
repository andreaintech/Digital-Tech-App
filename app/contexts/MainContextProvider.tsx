
// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../hooks/useUser';

const MainContext = createContext({
    reset: () => { },
    currentUser: {
        username: '',
        name: '',
        surname: '',
        avatar: '',
    },
    setCurrentUser: () => { },
    login: () => { },
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }: any) => {
    const [count, setCount] = useState(0);

    const {
        currentUser,
        setCurrentUser,
        signUp,
        login,
        logOut,
        onChangePostLike,
        isPostLiked,
        userExists
    } = useUser();

    return (
        <MainContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                login
            }}>
            {children}
        </MainContext.Provider>
    );
};