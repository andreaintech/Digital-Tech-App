import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONTS, SIZES } from '../../../styles/BaseTheme';

const PostText = () => {
    return (
        <View style={{
            flex: 1.7,
            justifyContent: 'center',
            paddingBottom: '4%',
        }}>
            <Text style={{
                fontFamily: FONTS.FONT_FAMILY_REGULAR,
                fontSize: SIZES.PARAGRAPH,
                textAlign: 'justify',
                paddingTop: '2%'
            }}>
                It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            </Text>
        </View>
    )
}

export default PostText

const styles = StyleSheet.create({})