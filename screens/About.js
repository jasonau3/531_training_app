import { View, Text, StyleSheet, Linking, SafeAreaView } from 'react-native';
import { COLORS, SIZES, FONTS } from '../assets/theme';
import { RoundButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const About = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>About 🤔</Text>

            <Text style={styles.text}>
                Made by{' '}
                <Text
                    style={{
                        color: COLORS.secondary,
                        fontFamily: FONTS.semiBold,
                    }}
                    onPress={() =>
                        Linking.openURL('https://github.com/jasonau3')
                    }
                >
                    Jason Au
                </Text>{' '}
                using React Native
            </Text>

            <Text style={styles.text}>
                Fitness program by r/Fitness and Jim Wendler "Boring But Big"
            </Text>

            <View style={styles.btn_container}>
                <RoundButton
                    text='Home'
                    width={260}
                    handlePress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.extraLarge,
        marginTop: 80,
        textAlign: 'center',
    },
    text: {
        marginHorizontal: 60,
        marginVertical: 80,
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        textAlign: 'center',
    },
    btn_container: {
        position: 'absolute',
        bottom: 60,
        alignItems: 'center',
    },
});

export default About;
