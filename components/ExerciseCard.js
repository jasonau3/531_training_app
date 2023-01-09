import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS, SIZES, FONTS } from '../assets/theme';

const ExerciseCard = ({ exercise_data }) => {
    console.log('--------------');
    console.log(exercise_data);

    const sets = exercise_data.sets;

    // if theres percentage max data, add a header for it
    let percentage_text;
    if (exercise_data.sets.set_1.percentage) {
        percentage_text = <Text style={styles.table_cell}>%</Text>;
    }

    // if theres weight data, add a header for it
    let weight_text;
    if (exercise_data.sets.set_1.weight) {
        weight_text = <Text style={styles.table_cell}>Weight</Text>;
    }

    // TODO: flatlist data issue, so im forced to render views conditionally -> post on stackoverflow?
    let set_2;
    if (exercise_data.sets.set_2) {
        set_2 = (
            <View style={styles.table_row}>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_2.percentage}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_2.weight}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_2.sets}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_2.reps}
                </Text>
            </View>
        );
    }

    let set_3;
    if (exercise_data.sets.set_3) {
        set_3 = (
            <View style={styles.table_row}>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_3.percentage}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_3.weight}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_3.sets}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_3.reps}
                </Text>
            </View>
        );
    }

    let set_BBB;
    if (exercise_data.sets.set_BBB) {
        set_BBB = (
            <View style={styles.table_row}>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_BBB.percentage}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_BBB.weight}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_BBB.sets}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_BBB.reps}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.table}>
            <Text style={styles.exercise_text}>{exercise_data.name}</Text>

            <View style={styles.table_row}>
                {percentage_text}
                {weight_text}
                <Text style={styles.table_cell}>Sets</Text>
                <Text style={styles.table_cell}>Reps</Text>
            </View>

            <View style={styles.table_row}>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_1.percentage}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_1.weight}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_1.sets}
                </Text>
                <Text style={styles.table_cell}>
                    {exercise_data.sets.set_1.reps}
                </Text>
            </View>

            {set_2}
            {set_3}
            {set_BBB}
        </View>
    );
};

const styles = StyleSheet.create({
    exercise_text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        alignSelf: 'center',
        marginTop: 15,
    },
    table: {
        marginVertical: 30,
    },
    table_row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    table_cell: {
        fontSize: SIZES.font,
        margin: 6,
        alignItems: 'flex-end',
    },
});

export default ExerciseCard;
