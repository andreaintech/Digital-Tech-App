import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../../../screens/main';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="MainScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigation