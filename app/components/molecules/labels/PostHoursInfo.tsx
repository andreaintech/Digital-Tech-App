import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SIZES, FONTS } from '../../../styles/BaseTheme';

const PostHoursInfo = () => {
    return (
        <Text style={{
            fontFamily: FONTS.FONT_FAMILY_REGULAR,
            fontSize: SIZES.BASE,
            paddingTop: '1%'
        }}>
            HACE 10 HORAS
        </Text>
    )
}

export default PostHoursInfo

const styles = StyleSheet.create({})
