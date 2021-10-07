import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FONTS, COLORS } from '../../../styles/BaseTheme';
import { TitleAndSubtitleProps as Props } from '../../../types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TitleAndSubtitle = ({
    title,
    subtitle,
    isVerified = false
}: Props) => {
    return (
        <View style={{
            paddingLeft: '3%',
            paddingTop: '3%',
            flexDirection: 'row'
        }}>
            <View style={{
                // flexDirection: '    '
            }}>
                <Text style={{ fontFamily: FONTS.FONT_FAMILY_REGULAR }}>{subtitle}</Text>
                <Text style={{ fontFamily: FONTS.FONT_FAMILY_BOLD }}>{title}</Text>
            </View>
            {isVerified && <MaterialIcons name="verified"
                size={15}
                color={COLORS.PRIMARY} />
            }

        </View>
    )
}

export default TitleAndSubtitle

const styles = StyleSheet.create({})
