import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    StatusBar,
    FlatList,
    SectionList,
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../assets/theme';
import { RoundButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const ExerciseHeader = ({ data }) => {
    // if theres percentage max data, add a header for it
    let percentage_text;
    if (data.data[0].percentage) {
        percentage_text = <Text style={styles.table_cell}>%</Text>;
    }

    // // if theres weight data, add a header for it
    let weight_text;
    if (data.data[0].percentage) {
        weight_text = <Text style={styles.table_cell}>Weight</Text>;
    }

    return (
        <View>
            <Text style={styles.exercise_text}>{data.name}</Text>
            <View style={styles.table_row}>
                {percentage_text}
                {weight_text}
                <Text style={styles.table_cell}>Sets</Text>
                <Text style={styles.table_cell}>Reps</Text>
            </View>
        </View>
    );
};

const ExerciseItem = ({ data }) => {
    return (
        <View style={styles.table_row}>
            <Text style={styles.table_cell}>{data.percentage}</Text>
            <Text style={styles.table_cell}>{data.weight}</Text>
            <Text style={styles.table_cell}>{data.sets}</Text>
            <Text style={styles.table_cell}>{data.reps}</Text>
        </View>
    );
};

const Workout_screen = ({ route }) => {
    const navigation = useNavigation();

    const data = route.params;

    console.log('==========');
    // console.log(data);

    // depending on which day, set the exercise type
    let main_exercise = '';
    switch (data.day) {
        case 1:
            main_exercise = 'Press';
            break;
        case 2:
            main_exercise = 'Squat';
            break;
        case 3:
            main_exercise = 'Deadlift';
            break;
        case 4:
            main_exercise = 'Bench';
            break;
        default:
            main_exercise = 'null';
            console.error('DATA.DAY ERROR, EXERCISE NOT FOUND');
    }

    // depending on the week, set the number of reps and sets
    let workout_reps = null;
    switch (data.week) {
        case 1:
            workout_reps = [5, 5, 5, 10];
            break;
        case 2:
            workout_reps = [3, 3, 3, 10];
            break;
        case 3:
            workout_reps = [5, 3, 1, 10];
            break;
        case 4:
            workout_reps = [5, 5, 5];
            break;
        default:
            workout_reps = [NULL];
            console.error('DATA.WEEK ERROR, REPS ERROR');
    }

    // set training max
    const training_max = data.personalRecords.find(
        (exercise) => exercise.exercise === main_exercise
    ).PR_val;

    // build the workout state -> if week 4, dont add BBB set
    const generateWorkout = () => {
        let newWorkout = [
            {
                name: main_exercise,
                data: [
                    {
                        percentage: data.percentages[0],
                        weight: (data.percentages[0] / 100) * training_max,
                        sets: 1,
                        reps: workout_reps[0],
                    },
                    {
                        percentage: data.percentages[1],
                        weight: (data.percentages[1] / 100) * training_max,
                        sets: 1,
                        reps: workout_reps[1],
                    },
                    {
                        percentage: data.percentages[2],
                        weight: (data.percentages[2] / 100) * training_max,
                        sets: 1,
                        reps: workout_reps[2],
                    },
                    {
                        percentage: data.percentages[3],
                        weight: (data.percentages[3] / 100) * training_max,
                        sets: 5,
                        reps: workout_reps[3],
                    },
                ],
            },
            {
                name: 'Push up',
                data: [{ sets: 1, reps: 50 }],
            },
            {
                name: 'Delt Raises',
                data: [{ sets: 1, reps: 50 }],
            },
            {
                name: 'Leg Raises',
                data: [{ sets: 1, reps: 50 }],
            },
        ];

        if (data.week === 4) {
            // delete the
            newWorkout[0].data.pop();
        }
        return newWorkout;
    };
    const [workout, setWorkout] = useState(() => generateWorkout());

    console.log(JSON.stringify(workout));

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='#61dafb'
                barStyle={'dark-content'}
            />

            <Text style={styles.title}>
                Week {data.week} Day {data.day}
            </Text>

            <SectionList
                sections={workout}
                renderItem={({ item }) => <ExerciseItem data={item} />}
                renderSectionHeader={({ section }) => (
                    <ExerciseHeader data={section} />
                )}
                scrollEnabled={false}
            />

            <View style={styles.btn_container}>
                <RoundButton
                    text='Finished!'
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
        marginTop: 60,
        textAlign: 'center',
    },
    btn_container: {
        flex: 1,
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
    },
    exercise_text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        alignSelf: 'center',
        marginTop: 20,
    },
    table_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    table_cell: {
        fontSize: SIZES.font,
        margin: 6,
        alignItems: 'flex-end',
    },
});

export default Workout_screen;
