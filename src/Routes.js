import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/Home';
import Main from './Screens/Main';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>

            <Stack.Navigator headerMode="" initialRouteName="Home">

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Main" component={Main} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}