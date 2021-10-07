// @ts-nocheck
import React, { useState, useEffect } from 'react';
import RootNavigation from './app/navigations/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from './app/contexts';
import { User } from './app/types';

const App = () => {
  const [user, setUser] = useState<User>({
    username: '',
    avatar: null,
    name: '',
    surname: '',
  });

  useEffect(() => {
    AsyncStorage.getItem("currentUser")
      .then((response: string | null) => {
        console.log(response)
        if (response !== null)
          setUser(JSON.parse(response))
      })
      .catch((error: Error) => console.log('[ERR] : getItem currentUser: ', error))
  }, []);

  const sUser = (user: User) => {
    setUser(user)
  }

  return (
    <Context.Provider
      value={{
        currentUser: user,
        setCurrentUser: sUser,
      }}
    >
      <RootNavigation />
    </Context.Provider>
  );
};

export default App;