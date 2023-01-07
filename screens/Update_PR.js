import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../assets/theme';
import { RoundButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Update_PR = ({ route }) => {
    const personalRecords = route.params.personalRecords;

    const navigation = useNavigation();

    // initialize values
    const [squatVal, setSquat] = useState(personalRecords[0].PR_val);
    const [deadliftVal, setDeadlift] = useState(personalRecords[1].PR_val);
    const [benchVal, setBench] = useState(personalRecords[2].PR_val);
    const [pressVal, setPress] = useState(personalRecords[3].PR_val);

    // verify and set on change
    const onChangeSquat = (val) => {
        if (val === '') {
            return;
        } else if (
            isNaN(parseFloat(val)) ||
            (val.match(/\./g) || []).length > 1
        ) {
            // is not a float or has 1+ '.' (ex 1.1.1)
            alert('Please enter a proper number (decimals accepted)');
        } else {
            setSquat(val);
        }
    };
    const onChangeDeadlift = (val) => {
        if (val === '') {
            return;
        } else if (
            isNaN(parseFloat(val)) ||
            (val.match(/\./g) || []).length > 1
        ) {
            // is not a float or has 1+ '.' (ex 1.1.1)
            alert('Please enter a proper number (decimals accepted)');
        } else {
            setDeadlift(val);
        }
    };
    const onChangeBench = (val) => {
        if (val === '') {
            return;
        } else if (
            isNaN(parseFloat(val)) ||
            (val.match(/\./g) || []).length > 1
        ) {
            // is not a float or has 1+ '.' (ex 1.1.1)
            alert('Please enter a proper number (decimals accepted)');
        } else {
            setBench(val);
        }
    };
    const onChangePress = (val) => {
        if (val === '') {
            return;
        } else if (
            isNaN(parseFloat(val)) ||
            (val.match(/\./g) || []).length > 1
        ) {
            // is not a float or has 1+ '.' (ex 1.1.1)
            alert('Please enter a proper number (decimals accepted)');
        } else {
            setPress(val);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Update PR 💪</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.inputRow}>
                        <Text style={styles.text}>Squat PR</Text>
                        <TouchableWithoutFeedback
                            onPress={Keyboard.dismiss}
                            accessible={false}
                        >
                            <TextInput
                                placeholder='New Squat PR (lb)'
                                style={styles.input}
                                onChangeText={onChangeSquat}
                                keyboardType='numeric'
                                onSubmitEditing={Keyboard.dismiss}
                            >
                                {squatVal}
                            </TextInput>
                        </TouchableWithoutFeedback>
                    </View>

                    <View
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps='handled'
                        style={styles.inputRow}
                    >
                        <Text style={styles.text}>Deadlift PR</Text>
                        <TextInput
                            placeholder='New Deadlift PR (lb)'
                            style={styles.input}
                            onChangeText={onChangeDeadlift}
                            keyboardType='numeric'
                            onSubmitEditing={Keyboard.dismiss}
                        >
                            {deadliftVal}
                        </TextInput>
                    </View>

                    <View
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps='handled'
                        style={styles.inputRow}
                    >
                        <Text style={styles.text}>Bench PR</Text>
                        <TextInput
                            placeholder='New Bench PR (lb)'
                            style={styles.input}
                            onChangeText={onChangeBench}
                            keyboardType='numeric'
                        >
                            {benchVal}
                        </TextInput>
                    </View>

                    <View
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps='handled'
                        style={styles.inputRow}
                    >
                        <Text style={styles.text}>Press PR</Text>
                        <TextInput
                            placeholder='New Press PR (lb)'
                            style={styles.input}
                            onChangeText={onChangePress}
                            keyboardType='numeric'
                        >
                            {pressVal}
                        </TextInput>
                    </View>
                </View>

                <View style={styles.btn_container}>
                    <RoundButton
                        text='Update'
                        width={260}
                        handlePress={() => {
                            // Pass and merge params back to home screen
                            navigation.navigate({
                                name: 'Home',
                                // send the data back with updated values
                                params: {
                                    personalRecords: [
                                        { exercise: 'Squat', PR_val: squatVal },
                                        {
                                            exercise: 'Deadlift',
                                            PR_val: deadliftVal,
                                        },
                                        { exercise: 'Bench', PR_val: benchVal },
                                        { exercise: 'Press', PR_val: pressVal },
                                    ],
                                },
                                merge: true,
                            });
                        }}
                    />
                    <RoundButton
                        text='Home'
                        width={260}
                        handlePress={() => navigation.navigate('Home')}
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.extraLarge,
        marginTop: 80,
        textAlign: 'center',
    },
    inputContainer: { marginTop: 80 },
    inputRow: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    text: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.large,
        textAlign: 'left',
        padding: 20,
    },
    input: {
        textAlign: 'right',
        fontSize: SIZES.large,
        color: COLORS.secondary,
        fontFamily: FONTS.semiBold,
    },
    btn_container: {
        position: 'absolute',
        bottom: 60,
        alignItems: 'center',
    },
});

export default Update_PR;
