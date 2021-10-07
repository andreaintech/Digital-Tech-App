import { createContext } from 'react';
import { User } from '../types';

const Context = createContext({
    currentUser: { avatar: null, username: '', name: '', surname: '', },
    setCurrentUser: (currentUser: User) => { },
})

export default Context