import { ImageSourcePropType } from 'react-native'

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