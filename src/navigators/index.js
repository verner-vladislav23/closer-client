import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppStack from './AppStack'
import AuthStack from './AuthStack'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="AppStack" component={AppStack} />
      {/*<Stack.Screen name='AuthStack' component={AuthStack}/>*/}
    </NavigationContainer>
  )
}

export default Navigation
