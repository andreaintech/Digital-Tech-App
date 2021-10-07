import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface ImagePostProps {
    image: ImageSourcePropType | null | string | any
}

const ImagePost = ({
    image
}: ImagePostProps) => {
    return (
        <Image
            style={{
                width: 320,
                height: 200,
                marginTop: '1%'
            }}
            source={image}
        />
    )
}

export default ImagePost

const styles = StyleSheet.create({})
