import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../styles/BaseTheme';
import { SHADOW } from '../../../styles/commons/shadows';

export const styles = StyleSheet.create({
    //* Post styles
    postContainer: {
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
    }
})