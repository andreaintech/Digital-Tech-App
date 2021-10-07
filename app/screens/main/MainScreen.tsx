import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainTemplate } from '../../components/templates/main';
import { Post } from '../../components/organisms/feed';

const MainScreen = () => {
    return (
        <MainTemplate>
            <Post />
            <Post image='hola' />
        </MainTemplate>
    )
}

export default MainScreen

const styles = StyleSheet.create({})