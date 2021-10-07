import { ImageSourcePropType } from 'react-native'

export interface User {
    avatar?: string;
    username: string;
    name: string;
    surname: string;
}

export interface Post {
    image?: ImageSourcePropType | null;
    likes?: Array<User>;
    message: string;
    author: User;
    create_at: Date;
    location: string;
    status: 'drafted' | 'deleted' | 'published';
}

export interface MainTemplateType {
    children: React.ReactNode
}

export interface OtherType {
    children: React.ReactNode
    hola: string
}

export interface SimpleAvatarProps {
    image: ImageSourcePropType
    width?: number
    height?: number
}

export interface TitleAndSubtitleProps {
    title: string
    subtitle: string
    isVerified?: boolean
}