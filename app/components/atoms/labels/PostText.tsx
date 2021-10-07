import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONTS, SIZES } from '../../../styles/BaseTheme';
import { PostTextProps } from '../../../types';

const PostText = ({
    message
}: PostTextProps) => {
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
                {message}
            </Text>
        </View>
    )
}

export default PostText

const styles = StyleSheet.create({})