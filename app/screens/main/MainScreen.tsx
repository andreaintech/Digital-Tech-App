import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainTemplate } from '../../components/templates/main';
import { SimpleAvatar } from '../../components/atoms/avatars';

const MainScreen = () => {
    return (
        <MainTemplate>

            <View style={{
                borderWidth: 1,
                borderColor: 'red',
                width: '100%',
                borderRadius: 20
            }}>
                <SimpleAvatar
                    image={require('../../../assets/images/avatars/1.jpg')}
                />
            </View>
        </MainTemplate>
    )
}

export default MainScreen

const styles = StyleSheet.create({})