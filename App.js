import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Weeks from './screens/Weeks';
import Update_PR from './screens/Update_PR';
import About from './screens/About';
import Workout from './screens/Workout_screen';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

const App = () => {
    const [loaded] = useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) return null;

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Home'
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Weeks' component={Weeks} />
                <Stack.Screen name='Workout' component={Workout} />
                <Stack.Screen name='Update_PR' component={Update_PR} />
                <Stack.Screen name='About' component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
