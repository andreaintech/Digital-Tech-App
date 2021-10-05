import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNavigation } from './sections/main';
import { LoginNavigation } from './sections/login';
import { SignUpNavigation } from './sections/sign-up';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
        <Stack.Screen
          name="MainNavigation"
          component={MainNavigation}
        />
        <Stack.Screen
          name="LoginNavigation"
          component={LoginNavigation}
        />
        <Stack.Screen
          name="SignUpNavigation"
          component={SignUpNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation

const styles = StyleSheet.create({})