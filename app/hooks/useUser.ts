import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';

export const useUser = () => {
    const [currentUser, setCurrentUser] = useState<User>({
        name: '',
        surname: '',
        username: '',
        avatar: null,
    });

    useEffect(() => {
        AsyncStorage.getItem("currentUser")
            .then((response: string | null) => {
                console.log(response)
                if (response !== null)
                    setCurrentUser(JSON.parse(response))
            })
            .catch((error: Error) => console.log('[ERR] : useUser getItem currentUser: ', error))
    }, []);

    /**
    * //* signUp
    //? Method to sign up a new user. The app must allow the user to register with the avatar, username, name and surname data
    *
    * @method
    * @param {string} name - The user's name
    * @param {string} surname - The user's surname
    * @param {string} username - The user's username
    * @param {string} avatar - The user's avatar
    * @returns {void}
    */
    const signUp = (): void => {

    }

    /**
    * //* login
    //? Method for current user to login
    *
    * @method
    * @param {string} username - The user's username
    * @returns {void}
    */
    const login = async (user: User) => {
        console.log('-------------- user: ', user);
        if (user) {
            AsyncStorage.setItem("currentUser", JSON.stringify({
                name: 'aja',
                username: user,
                surname: 'aja',
                avatar: 'aja',
            }))
            setCurrentUser({
                name: 'aja',
                username: user,
                surname: 'aja',
                avatar: 'aja',
            })

            console.log('current user changed: ', currentUser)
            // .then((response: string | null) => {
            //     console.log(response)
            //     if (response !== null)
            //         setCurrentUser(JSON.parse(response))
            // })
            // .catch((error: Error) => console.log('[ERR] : useUser getItem currentUser: ', error))
        } else {
            console.log('[ERR] : useUser login: user is null')
        }
    }

    /**
    * //* isUserLoggedIn
    //? Verifies if user is logged in
    *
    * @method
    * @param {string} username - The user's username
    * @returns {boolean}
    */
    const isUserLoggedIn = (): void => {

    }



    /**
    * //* logOut
    //? Method for current user to log out
    *
    * @method
    * @returns {void}
    */
    const logOut = (): void => {

    }

    /**
    * //* onChangePostLike
    //? Method to change the like status of a post (liked to disliked or disliked to liked). The app must allow other users to like the publications only once.
    *
    * @method
    * @returns {void}
    */
    const onChangePostLike = (): void => {

    }

    /**
    * //* isPostLiked
    //? Method to verifies like status of a particular post (true if liked, false if disliked)
    *
    * @method
    * @returns {boolean}
    */
    const isPostLiked = (): void => {

    }

    /**
    * //* isPostLiked
    //? Verifies if user (username) exists or not
    *
    * @method
    * @returns {boolean}
    */
    const userExists = (): void => {

    }

    /**
    * //* createPost
    //? Create a new post. The user will be able to create all posts he wants.
    *
    * @method
    * @returns {void}
    */
    const createPost = (): void => {

    }

    //TODO ---------- extra points ----------//
    /**
    * //* exportAllUserPosts
    //? Create a new post. The user will be able to create all posts he wants.
    *
    * @method
    * @returns {void}
    */
    const exportAllUserPosts = (): void => {

    }

    return {
        currentUser,
        setCurrentUser,
        signUp,
        login,
        logOut,
        onChangePostLike,
        isPostLiked,
        userExists,
        isUserLoggedIn,
    }
}