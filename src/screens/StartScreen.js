import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import propTypes from 'prop-types'

const ar = { fn: 'nin', ln: 'bib',
  photo: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/cf3/3eb/cebf385e9da99914a27f31c22d.jpg',
  geo: {}, infoCards: [{ _id: '0', title: 'tit0', text: 'txt0' }, { _id: '1', title: 'tit1', text: 'txt1' },
    { _id: '2', title: 'tit2', text: 'txt2' }, { _id: '3', title: 'tit3', text: 'txt3' },
    { _id: '4', title: 'tit4', text: 'txt4' }, { _id: '5', title: 'tit5', text: 'txt5' },
    { _id: '6', title: 'tit6', text: 'txt6' }, { _id: '7', title: 'tit7', text: 'txt7' }],
  status: 'sdfdfrfgsdf', socialLinks: { vk: 'dsff', instagram: '' } }

export default class StartScreen extends Component {
  handleNavigate = () => {
    this.props.navigation.navigate('profile', { person: ar })
  }
  render() {
    return (
      <View style={styles.container}>
		    <Button title={'open'} onPress={this.handleNavigate} />
      </View>
    )
  }
}

StartScreen.propTypes = {
  navigation: propTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3'
  },
})
