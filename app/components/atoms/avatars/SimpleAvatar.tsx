import React from 'react'
import { Image } from 'react-native'
import { SimpleAvatarProps } from '../../../types';
import { styles } from './styles';

const SimpleAvatar = ({
    image
}: SimpleAvatarProps) => {
    return (
        <Image
            style={styles.avatar}
            source={image}
        />
    )
}

export default SimpleAvatar