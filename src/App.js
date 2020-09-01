import React from 'react'
import { AsyncStorage } from 'react-native'

import { NavigationContainer, CommonActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import UsersScreen from './screens/UsersScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import useGeolocation from './services/LocationService'

// const loc = () => {
//   const [error, position] = useGeolocation()
//   console.log(position)
//   console.log(error)
//   console.log('ss')
// }
AsyncStorage.getItem('jwt').then(value => console.log(value))

const Stack = createStackNavigator()

const App = () => (
  //todo error
  <NavigationContainer>
    <Stack.Navigator>
      {AsyncStorage.getItem('jwt').then(value => value == null) ?
        (<>
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </>) :
        (<>
          <Stack.Screen name='UsersScreen' component={UsersScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </>)}
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
