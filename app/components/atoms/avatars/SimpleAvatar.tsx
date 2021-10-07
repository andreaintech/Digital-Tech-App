import React from 'react';
import { Image } from 'react-native';
import { SimpleAvatarProps as Props } from '../../../types';
import { styles } from './styles';

const SimpleAvatar = ({
    image = null,
    width = 60,
    height = 60
}: Props) => {
    const avatarStyles = {
        width,
        height,
    }
    return (
        <Image
            style={[styles.avatar, avatarStyles]}
            source={image ? image : require('../../../../assets/images/avatars/avatar.png')}
        />
    )
}

export default SimpleAvatar