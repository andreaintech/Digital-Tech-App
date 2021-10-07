import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, Post } from '../types';
import { EMPTY_USER } from '../utils';

export const usePost = () => {
    const [data, setData] = useState<Array<Post>>([])  //* Data is all app posts (Array<Post>)
    const [post, setPost] = useState<Post>({
        image: '',
        likes: [],
        message: '',
        author: EMPTY_USER,
        create_at: new Date(),
        location: '',
        status: 'drafted',
    });

    useEffect(() => {
        AsyncStorage.getItem("data")
            .then((response: string | null) => {
                console.log(response)
                if (response !== null)
                    setData(JSON.parse(response))
            })
            .catch((error: Error) => console.log('[ERR] : useUser getItem data: ', error))
    }, []);

    /**
    * //* getLikesGivenPostAuthor
    //? Get all likes (Array<User>) given a post author (<User>)
    *
    * @method
    * @param {User} author
    * @returns {Array<User>}
    */
    const getLikesGivenPostAuthor = (user: User): void => {
        return
    }

    /**
    * //* getTotalLikesGivenPostAuthor
    //? Get all likes (Array<User> length) given a post author (<User>)
    *
    * @method
    * @param {User} author
    * @returns {number}
    */
    const getTotalLikesGivenPostAuthor = (user: User): void => {
        return
    }

    /**
    * //* getPostInfoGivenPostAuthor
    //? Get all post info (<Post>) given a post (author <User>)
    *
    * @method
    * @param {User} author
    * @returns {number}
    */
    const getPostInfoGivenPostAuthor = (user: User): void => {
        return
    }

    /**
    * //* getPostsGivenPostAuthor
    //? Get all post info (<Post>) given a post (author <User>)
    *
    * @method
    * @param {User} author
    * @returns {number}
    */
    const getPostsGivenPostAuthor = (user: User): void => {
        return
    }

    return {
        data,
        setData,
        getLikesGivenPostAuthor,
        getTotalLikesGivenPostAuthor,
        getPostInfoGivenPostAuthor,
        getPostsGivenPostAuthor,
    }
}