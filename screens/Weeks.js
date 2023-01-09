import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS } from '../assets/theme';
import { RoundButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Weeks = ({ route }) => {
    const personalRecords = route.params.personalRecords;

    // an object containing the percentages of each week, passed as a prop
    const week_percentages = {
        week_1: [65, 75, 85, 30],
        week_2: [70, 80, 90, 30],
        week_3: [75, 85, 95, 30],
        week_4: [60, 60, 60],
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select Day</Text>

            <ScrollView style={styles.scroll_container}>
                <RoundButton
                    text='Week 1 Day 1'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 1,
                            day: 1,
                            percentages: week_percentages.week_1,
                        })
                    }
                />
                <RoundButton
                    text='Week 1 Day 2'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 1,
                            day: 2,
                            percentages: week_percentages.week_1,
                        })
                    }
                />
                <RoundButton
                    text='Week 1 Day 3'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 1,
                            day: 3,
                            percentages: week_percentages.week_1,
                        })
                    }
                />
                <RoundButton
                    text='Week 1 Day 4'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 1,
                            day: 4,
                            percentages: week_percentages.week_1,
                        })
                    }
                />
                <RoundButton
                    text='Week 2 Day 1'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 2,
                            day: 1,
                            percentages: week_percentages.week_2,
                        })
                    }
                />
                <RoundButton
                    text='Week 2 Day 2'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 2,
                            day: 2,
                            percentages: week_percentages.week_2,
                        })
                    }
                />
                <RoundButton
                    text='Week 2 Day 3'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 2,
                            day: 3,
                            percentages: week_percentages.week_2,
                        })
                    }
                />
                <RoundButton
                    text='Week 2 Day 4'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 2,
                            day: 4,
                            percentages: week_percentages.week_2,
                        })
                    }
                />
                <RoundButton
                    text='Week 3 Day 1'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 3,
                            day: 1,
                            percentages: week_percentages.week_3,
                        })
                    }
                />
                <RoundButton
                    text='Week 3 Day 2'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 3,
                            day: 2,
                            percentages: week_percentages.week_3,
                        })
                    }
                />
                <RoundButton
                    text='Week 3 Day 3'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 3,
                            day: 3,
                            percentages: week_percentages.week_3,
                        })
                    }
                />
                <RoundButton
                    text='Week 3 Day 4'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 3,
                            day: 4,
                            percentages: week_percentages.week_3,
                        })
                    }
                />
                <RoundButton
                    text='Week 4 Day 1'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 4,
                            day: 1,
                            percentages: week_percentages.week_4,
                        })
                    }
                />
                <RoundButton
                    text='Week 4 Day 2'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 4,
                            day: 2,
                            percentages: week_percentages.week_4,
                        })
                    }
                />
                <RoundButton
                    text='Week 4 Day 3'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 4,
                            day: 3,
                            percentages: week_percentages.week_4,
                        })
                    }
                />
                <RoundButton
                    text='Week 4 Day 4'
                    width={260}
                    handlePress={() =>
                        navigation.navigate('Workout', {
                            personalRecords,
                            week: 4,
                            day: 4,
                            percentages: week_percentages.week_4,
                        })
                    }
                />
                <RoundButton
                    text='Home'
                    width={260}
                    handlePress={() => navigation.navigate('Home')}
                />
            </ScrollView>
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
    scroll_container: {},
    btn_container: {
        position: 'absolute',
        bottom: 60,
        alignItems: 'center',
    },
});

export default Weeks;
