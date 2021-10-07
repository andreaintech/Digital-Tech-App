export const POSTS = [
    {
        author: {
            username: 'fdasilva',
            name: 'Fabiana',
            surname: 'Da Silva',
            avatar: require('../../assets/images/avatars/1.jpg')
        },
        message: "Hello, how are you?",
        image: '',
        likes: [
            {
                username: 'ddasilva',
                name: 'Daniela',
                surname: 'Da Silva',
            },
            {
                username: 'adasilvapdev',
                name: 'Andrea',
                surname: 'Da Silva',
            },
        ],
        location: 'Trigal',
        status: 'published',
        create_at: new Date(),
    },
    {
        author: {
            username: 'adasilvapdev',
            name: 'Andrea',
            surname: 'Da Silva',
            avatar: require('../../assets/images/avatars/2.jpg')
        },
        message: "It is a long established fact that a reader will be \n' + 'distracted by the readable content of a page when looking at its layout.Hello, how are you?",
        image: require('../../assets/images/avatars/6.jpg'),
        likes: [
            {
                username: 'ddasilva',
                name: 'Daniela',
                surname: 'Da Silva',
            },
            {
                username: 'fdasilva',
                name: 'Fabiana',
                surname: 'Da Silva',
            },
            {
                username: 'adasilvapdev',
                name: 'Andrea',
                surname: 'Da Silva',
            },
        ],
        location: 'Valencia',
        status: 'published',
        create_at: new Date(),
    },
    {
        author: {
            username: 'ddasilva',
            name: 'Daniela',
            surname: 'Da Silva',
            avatar: require('../../assets/images/avatars/3.jpg')
        },
        message: "distracted by the readable content of a page when looking at its layout.Hello, how are you?",
        image: require('../../assets/images/avatars/4.jpg'),
        likes: [
            {
                username: 'adasilvapdev',
                name: 'Andrea',
                surname: 'Da Silva',
            },
        ],
        location: 'Caracas',
        status: 'published',
        create_at: new Date(),
    },
    {
        author: {
            username: 'vpinto',
            name: 'Vanessa',
            surname: 'Pinto',
            avatar: require('../../assets/images/avatars/4.jpg')
        },
        message: "distracted by the readable content of a page when looking at its layout.Hello, how are you?",
        image: require('../../assets/images/avatars/4.jpg'),
        likes: [
            {
                username: 'adasilvapdev',
                name: 'Andrea',
                surname: 'Da Silva',
            },
            {
                username: 'fdasilva',
                name: 'Fabiana',
                surname: 'Da Silva',
            },
        ],
        location: 'Miranda',
        status: 'published',
        create_at: new Date(),
    },
]

export const EMPTY_USER = {
    avatar: '',
    username: '',
    name: '',
    surname: ''
}