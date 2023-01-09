import {
    View,
    SafeArea,
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    Button,
    Animated,
    Easing,
    Image,
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../assets/theme';
import { FocusedStatusBar } from '../components';
import { RoundButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ route }) => {
    // function to store data into device
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@storage_Key', jsonValue);
            alert('Data saved');
        } catch (e) {
            // saving error
        }
    };

    useEffect(() => {
        if (route.params?.personalRecords) {
            // Update the record of each exercise
            setPersonalRecords(() => {
                return route.params.personalRecords;
            });
            // call the store data function
            storeData(personalRecords);
        }
    }, [route.params?.personalRecords]);

    const [personalRecords, setPersonalRecords] = useState([]);

    // TODO: get the stored data
    // const getData = async () => {
    //     try {
    //         alert('getting data');
    //         const jsonValue = await AsyncStorage.getItem('@storage_Key');
    //         return jsonValue != null ? JSON.parse(jsonValue) : null;
    //     } catch (e) {
    //         // error reading value
    //     }
    // };
    // const personalRecordData = getData();

    // console.log(personalRecordData);

    // if (personalRecordData) {
    //     setPersonalRecords(() => {
    //         return personalRecordData;
    //     });
    // }

    // if no asynch data is found, generate it to some default
    if (Object.keys(personalRecords).length == 0) {
        setPersonalRecords(() => {
            return [
                { exercise: 'Squat', PR_val: 160 },
                { exercise: 'Deadlift', PR_val: 200 },
                { exercise: 'Bench', PR_val: 150 },
                { exercise: 'Press', PR_val: 100 },
            ];
        });
    }

    const navigation = useNavigation();

    const translation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(translation, {
            toValue: 150,
            easing: Easing.bounce,
            duration: 3600,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar backgroundColor={COLORS.white} />
            <Text style={styles.title}>5/3/1 Training</Text>

            <Animated.View
                style={{
                    transform: [{ translateY: translation }],
                    alignSelf: 'center',
                    marginTop: 20,
                }}
            >
                <Image
                    source={require('../assets/purple-heart_1f49c.png')}
                    style={{
                        width: 80,
                        height: 80,
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }}
                ></Image>
            </Animated.View>

            <View style={styles.btn_container}>
                <RoundButton
                    text='Select Week'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Weeks', { personalRecords })
                    }
                />
                <RoundButton
                    text='Update PR'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Update_PR', {
                            personalRecords,
                        })
                    }
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
        marginTop: 180,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
