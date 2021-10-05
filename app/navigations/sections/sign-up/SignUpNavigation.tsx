import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from '../../../screens/sign-up';

const Stack = createStackNavigator();

const SignUpNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="SignUpScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
            />
        </Stack.Navigator>
    );
}

export default SignUpNavigation