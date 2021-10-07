import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SimpleAvatar } from '../../atoms/avatars';
import { SIZES, COLORS, FONTS } from '../../../styles/BaseTheme';

interface Props {
    likeAction: () => void
    likedPost: boolean
    firstUserLiked: string
}

const LikedInfo = ({
    likeAction,
    likedPost,
    firstUserLiked
}: Props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-end'
        }}>
            <AntDesign
                style={{ paddingBottom: '1%' }}
                onPress={likeAction}
                name={likedPost ? 'heart' : 'hearto'}
                size={23}
                color={COLORS.QUINARY}
            />
            <View style={{ flexDirection: 'row' }}>
                <SimpleAvatar
                    width={25}
                    height={25}
                    image={require('../../../../assets/images/avatars/2.jpg')}
                />
                <Text style={{
                    paddingTop: '2%',
                    paddingLeft: '2%',
                    fontSize: SIZES.PARAGRAPH,
                    fontFamily: FONTS.FONT_FAMILY_REGULAR
                }}>Le gusta a
                    <Text style={{ fontFamily: FONTS.FONT_FAMILY_BOLD }}> {firstUserLiked} y 12 más</Text>
                </Text>
            </View>
        </View>
    )
}

export default LikedInfo