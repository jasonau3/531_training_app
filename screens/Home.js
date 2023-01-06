import { useState } from 'react';
import {
    View,
    SafeArea,
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    Button,
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../assets/theme';
import { FocusedStatusBar } from '../components';
import { RoundButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar backgroundColor={COLORS.white} />
            <Text style={styles.title}>5/3/1 Training</Text>
            <View style={styles.btn_container}>
                <RoundButton
                    text='Select Week'
                    width={260}
                    handlePress={() => navigation.navigate('Weeks')}
                />
                <RoundButton
                    text='Update PR'
                    width={260}
                    handlePress={() => navigation.navigate('Update_PR')}
                />
                <RoundButton
                    text='About'
                    width={260}
                    handlePress={() => navigation.navigate('About')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: COLORS.white,
    },
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.extraLarge,
        marginTop: 80,
        textAlign: 'center',
    },
    btn_container: {
        marginTop: 100,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
