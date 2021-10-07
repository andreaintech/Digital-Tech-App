import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SimpleAvatar } from '../../atoms/avatars';
import { SIZES, COLORS, FONTS } from '../../../styles/BaseTheme';
import { User } from '../../../types';

interface Props {
    likes: Array<User>
    likeAction: () => void
    likedPost: boolean
}

const LikedInfo = ({
    likes,
    likeAction,
    likedPost,
}: Props) => {

    //* Verifies if the current user liked the post
    // const isUserLikedPost = () => {
    //     return likes.find(user => user.username === currentUser.username)
    // }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-end'
        }}>
            <AntDesign
                style={{ paddingBottom: '1%' }}
                onPress={likeAction}
                // name={isUserLikedPost ? 'heart' : 'hearto'}
                name={likedPost ? 'heart' : 'hearto'}
                size={23}
                color={COLORS.QUINARY}
            />

            {likes.length > 0 &&
                <View style={{ flexDirection: 'row' }}>
                    <SimpleAvatar
                        width={25}
                        height={25}
                        image={likes[0].avatar}
                    />
                    <Text style={{
                        paddingTop: '2%',
                        paddingLeft: '2%',
                        fontSize: SIZES.PARAGRAPH,
                        fontFamily: FONTS.FONT_FAMILY_REGULAR
                    }}>
                        Le gusta a
                        <Text style={{ fontFamily: FONTS.FONT_FAMILY_BOLD }}> {likes[0].username} y {likes.length} más</Text>
                    </Text>
                </View>
            }
        </View>
    )
}

export default LikedInfo