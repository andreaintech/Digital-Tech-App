import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../../screens/login';

const Stack = createStackNavigator();

const LoginNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
        </Stack.Navigator>
    );
}

export default LoginNavigation