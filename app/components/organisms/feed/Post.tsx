import React, { useState } from 'react';
import { View } from 'react-native';
import { SimpleAvatar } from '../../atoms/avatars';
import { PostHoursInfo, TitleAndSubtitle } from '../../molecules/labels';
import { LikedInfo } from './';
import { PostText } from '../../atoms/labels';
import { Post as PostProps } from '../../../types';
import { styles as postStyles } from './styles';
import { ImagePost } from '../../atoms/images';

const Post = ({
    image = null,
    message,
    likes = [],
    author,
    create_at,
    location,
    status,
}: PostProps) => {
    const [likedPost, setLikedPost] = useState<boolean>(false);

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

            {image !== '' &&
                <ImagePost
                    image={image}
                />
            }

            <PostText
                message={message}
            />

            <LikedInfo
                likes={likes}
                likeAction={likeAction}
                likedPost={likedPost}
            />

            {image === '' ||
                <PostHoursInfo />
            }
        </View>
    )
}

export default Post