import { createContext } from 'react';
import { User, Data } from '../types';

const Context = createContext({
    currentUser: { avatar: null, username: '', name: '', surname: '', },
    setCurrentUser: (currentUser: User) => { },
    data: [],   //* Data is all app posts (Array<Post> | Data)
    setData: (data: Data) => { },
})

export default Context