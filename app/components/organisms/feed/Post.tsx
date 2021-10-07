import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SimpleAvatar } from '../../atoms/avatars';
import { TitleAndSubtitle } from '../../molecules/labels';
import { SHADOW } from '../../../styles/commons/shadows';
import { SIZES, COLORS, FONTS } from '../../../styles/BaseTheme';
import { LikedInfo } from './';
import { PostText } from '../../atoms/labels';

interface Props {
    liked?: boolean
    username?: string
    image?: string
}
const Post = ({
    liked = true,
    username,
    image = ''
}: Props) => {
    const firstUserLiked = '@aanng'
    const [likedPost, setLikedPost] = useState<boolean>(liked);

    const likeAction = () => {
        setLikedPost(!likedPost)
    }

    return (
        <View style={{
            width: '100%',
            height: '100%',
            marginVertical: '2%',
            paddingHorizontal: '4%',
            paddingVertical: '2%',
            backgroundColor: COLORS.WHITE,
            flex: 0.3,
            borderRadius: 20,
            minWidth: 350,
            minHeight: 40,
            borderRightColor: COLORS.PRIMARY,
            borderRightWidth: 1,
            borderBottomColor: COLORS.QUINARY,
            borderBottomWidth: 1,
            ...SHADOW,
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <SimpleAvatar
                    image={require('../../../../assets/images/avatars/1.jpg')}
                />
                <TitleAndSubtitle
                    isVerified
                    title={'Priscila Shane'}
                    subtitle={'@shanepriscila'}
                />

                {image === '' &&
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
                }
            </View>

            <PostText />

            <LikedInfo
                likeAction={likeAction}
                likedPost={likedPost}
                firstUserLiked={firstUserLiked}
            />

            {image === '' ||
                <Text style={{
                    fontFamily: FONTS.FONT_FAMILY_REGULAR,
                    fontSize: SIZES.BASE,
                    paddingTop: '1%'
                }}>
                    HACE 10 HORAS
                </Text>
            }
        </View>
    )
}

export default Post