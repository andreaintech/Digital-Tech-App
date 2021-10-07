import React from 'react';
import { StyleSheet } from 'react-native';
import { MainTemplate } from '../../components/templates/main';
import { Post } from '../../components/organisms/feed';
import { ScrollView } from 'react-native-gesture-handler';

const MainScreen = () => {
    return (
        <MainTemplate>
            <ScrollView>

                <Post />
                <Post image={require('../../../assets/images/avatars/6.jpg')} />

            </ScrollView>
        </MainTemplate>
    )
}

export default MainScreen

const styles = StyleSheet.create({})