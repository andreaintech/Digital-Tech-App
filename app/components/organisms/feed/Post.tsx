import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { SimpleAvatar } from '../../atoms/avatars';
import { PostDayInfo, PostHoursInfo, TitleAndSubtitle } from '../../molecules/labels';
import { LikedInfo } from './';
import { PostText } from '../../atoms/labels';
import { Post as PostProps } from '../../../types';
import { styles as postStyles } from './styles';

const Post = ({
    image = null,
    message,
    likes = [],
    author,
    create_at,
    location,
    status,
}: PostProps) => {
    const firstUserLiked = '@aanng'
    const [likedPost, setLikedPost] = useState<boolean>(false);

    console.log('------- image: ', image)

    const likeAction = () => {
        setLikedPost(!likedPost)
    }

    return (
        <View style={postStyles.postContainer}>
            <View style={{
                flexDirection: 'row',
            }}>
                <SimpleAvatar
                    image={author.avatar}
                />
                <TitleAndSubtitle
                    image={image === null}
                    isVerified
                    nameAndSurname={`${author.name} ${author.surname}`}
                    username={`@${author.username}`}
                />
            </View>

            {image &&
                <Image
                    style={{
                        width: 320,
                        height: 200,
                        marginTop: '1%'
                    }}
                    source={image}
                />
            }

            <PostText
                message={message}
            />

            <LikedInfo
                likeAction={likeAction}
                likedPost={likedPost}
                firstUserLiked={firstUserLiked}
            />

            {image === null ||
                <PostHoursInfo />
            }
        </View>
    )
}

export default Post