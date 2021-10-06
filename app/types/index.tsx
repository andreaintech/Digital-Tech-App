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
}