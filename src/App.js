import React from 'react'

import { NavigationContainer, CommonActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UsersScreen from './screens/UsersScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import useGeolocation from './services/LocationService'
import { AsyncStorage } from 'react-native'

const Stack = createStackNavigator()

// const loc = () => {
//   const [error, position] = useGeolocation()
//   console.log(position)
//   console.log(error)
//   console.log('ss')
// }

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='UsersScreen' component={UsersScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

// todo
if (AsyncStorage.getItem('jwt') != null) {
  CommonActions.navigate('UsersScreen')
}
//setTimeout(loc, 1000)
//setInterval(loc, 2000)

export default App
