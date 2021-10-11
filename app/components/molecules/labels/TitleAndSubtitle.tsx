import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FONTS, COLORS } from '../../../styles/BaseTheme';
import { TitleAndSubtitleProps as Props } from '../../../types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { PostDayInfo } from '../../molecules/labels';

const TitleAndSubtitle = ({
    image,
    nameAndSurname,
    username,
    isVerified = false
}: Props) => {
    return (
        <View style={{
            paddingLeft: '3%',
            paddingTop: '3%',
            flexDirection: 'row',
        }}>
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    minWidth: 170,
                }}>
                    <Text style={{
                        fontFamily: FONTS.FONT_FAMILY_REGULAR,
                        paddingRight: '1%',
                    }}>
                        {username}
                    </Text>

                    {/* verification account icon */}
                    {isVerified &&
                        <MaterialIcons
                            style={{
                                paddingTop: '0.5%'
                            }}
                            name="verified"
                            size={15}
                            color={COLORS.PRIMARY}
                        />
                    }

                    {/* post day info only if is a post with image */}
                    {image &&
                        <PostDayInfo />
                    }
                </View>
                <Text style={{ fontFamily: FONTS.FONT_FAMILY_BOLD }}>{nameAndSurname}</Text>
            </View>
        </View>
    )
}

export default TitleAndSubtitle

const styles = StyleSheet.create({})
