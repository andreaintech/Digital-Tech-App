import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainTemplateType } from '../../../types';

const MainTemplate = ({ children }: MainTemplateType) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden />
            <View style={{ flex: 0.1, }}>

            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                marginHorizontal: 20,
            }}>
                {children}
            </View>
            <View style={{ flex: 0.1, }}>

            </View>
        </SafeAreaView>
    )
}

export default MainTemplate

const styles = StyleSheet.create({})
