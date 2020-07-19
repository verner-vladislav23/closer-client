import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import UsersScreen from 'screens/UsersScreen'
import ProfileScreen from 'screens/ProfileScreen'

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="UsersScreen" component={UsersScreen} />
    <ProfileScreen name="ProfileScreen" component={ProfileScreen} />
  </Stack.Navigator>
)

export default AppStack
