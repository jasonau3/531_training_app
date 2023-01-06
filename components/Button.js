import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../assets/theme';

export const RoundButton = ({ text, width, handlePress, ...props }) => {
    // TODO: why doesnt https://stackoverflow.com/a/40665657 work?
    return (
        <TouchableOpacity style={[styles.btn, width]} onPress={handlePress}>
            <Text style={styles.btn_text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: 260,
        margin: 20,
        padding: SIZES.small,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_text: {
        color: COLORS.white,
        fontSize: SIZES.font,
    },
});
