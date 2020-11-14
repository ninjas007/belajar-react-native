import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Login';
import Album from '../screen/Album';

const Stack = createStackNavigator()
const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Album" component={Album} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default(Navigator = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
});