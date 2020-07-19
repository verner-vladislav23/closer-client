import React, {Component} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import ProfileText from '../components/ProfileText'
import { style } from '../components/ProfileBackground'

export default class ProfileScreen extends Component {
  render = () => {
    const {person} = this.props.route.params;
    return (
      <View style={style.back}>
        <View style={style.front}>
          <Image source={{uri:person.pic}} style={styles.picture} />
          <ProfileText title={person.title} text={person.text}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	name: {
      color: '#98C1D9'
  },
  distance: {
    color: '#000'
  },
  info: {
    color: '#243241'
  },
  picture: {
    alignContent: 'center',
    borderRadius: 12,
    width: 150, 
    height: 150
  }
  })