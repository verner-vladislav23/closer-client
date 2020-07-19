import React from 'react'
import { View, Image, Text } from 'react-native'
import ProfileText from '../components/ProfileText'
import { style } from './style'

const ProfileScreen = () => {
  const { person } = this.props.route.params
  return (
    <View style={style.back}>
      <View style={style.front}>
        <Image source={{ uri: person.pic }} style={styles.picture} />
        <ProfileText title={person.title} text={person.text} />
      </View>
    </View>
  )
}
