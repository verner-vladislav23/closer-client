import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen'
import StartScreen from '../screens/StartScreen'

const Stack = createStackNavigator();

export const Navigation = () => {
	return (
	<Stack.Navigator initialRouteName={'start'}>
		<Stack.Screen name={'start'} component={ StartScreen } />
        <Stack.Screen name={'profile'} component={ ProfileScreen } />
	</Stack.Navigator>
	)
}