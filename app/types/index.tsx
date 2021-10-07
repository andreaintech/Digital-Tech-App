import { ImageSourcePropType } from 'react-native'

//* Data structure
export interface User {
    avatar?: ImageSourcePropType | null | string;
    username: string;
    name: string;
    surname: string;
}

export interface Post {
    image?: ImageSourcePropType | null | string;
    likes?: Array<User>;
    message: string;
    author: User;
    create_at: Date;
    location: string;
    status: 'drafted' | 'deleted' | 'published';
}


//* Components (templates)
export interface MainTemplateType {
    children: React.ReactNode
}


//* Components (organisms)
export interface PostTextProps {
    message: string
}


//* Components (molecules)
export interface TitleAndSubtitleProps {
    image?: boolean
    nameAndSurname: string
    username: string
    isVerified?: boolean
}


//* Components (atoms)
export interface SimpleAvatarProps {
    image?: ImageSourcePropType | null | string
    width?: number
    height?: number
}