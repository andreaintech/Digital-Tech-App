import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS } from '../../../styles/BaseTheme';

const PostDayInfo = () => {
    return (
        <>
            <View
                style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginBottom: '8%',
                    marginLeft: '1%',
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: COLORS.BLACK
                }}
            />
            <Text style={{
                fontFamily: FONTS.FONT_FAMILY_REGULAR,
                paddingLeft: '1%',
                paddingTop: '3%',
            }}>
                1d
            </Text>
        </>
    )
}

export default PostDayInfo

const styles = StyleSheet.create({})