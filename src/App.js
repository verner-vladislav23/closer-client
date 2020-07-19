import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation/Navigation'

export default class App extends Component {


  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </View>
    )
  }
}
