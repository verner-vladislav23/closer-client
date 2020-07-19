/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

const ar = { title: 'dssd', text: 'dddddd',
  pic: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/cf3/3eb/cebf385e9da99914a27f31c22d.jpg',
  name: 'hel mel', info: 'hello', dist: '12' }

export default class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
		    <Button title={'open'} onPress={() => {
          this.props.navigation.navigate('profile', { person: ar })
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3'
  },
})
