import React, { useState, useEffect } from 'react';
import RootNavigation from './app/navigations/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Context } from './app/contexts';
// import { User, Data } from './app/types';
import { MainContextProvider } from './app/contexts/MainContextProvider';

const App = () => {
  // const [data, setData] = useState<Data>([]);
  // const [user, setUser] = useState<User>({
  //   username: '',
  //   avatar: null,
  //   name: '',
  //   surname: '',
  // });

  // useEffect(() => {
  //   AsyncStorage.getItem("data")
  //     .then((response: string | null) => {
  //       console.log(response)
  //       if (response !== null)
  //         setUser(JSON.parse(response))
  //     })
  //     .catch((error: Error) => console.log('[ERR] : getItem data: ', error))
  // }, []);

  // useEffect(() => {
  //   AsyncStorage.getItem("currentUser")
  //     .then((response: string | null) => {
  //       console.log(response)
  //       if (response !== null)
  //         setUser(JSON.parse(response))
  //     })
  //     .catch((error: Error) => console.log('[ERR] : getItem currentUser: ', error))
  // }, []);

  // const sUser = (user: User) => {
  //   setUser(user)
  // }

  // const sData = (data: Data) => {
  //   setData(data)
  // }

  return (
    // <Context.Provider
    //   value={{
    //     currentUser: user,
    //     setCurrentUser: sUser,
    //     data: data,
    //     setData: sData,
    //   }}
    // >
    <MainContextProvider>
      <RootNavigation />
    </MainContextProvider>
    // </Context.Provider>
  );
};

export default App;