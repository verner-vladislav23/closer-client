import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import ProfileText from '../../components/ProfileText/ProfileText'
import style from './style'

const ProfileScreen = ({ route }) => {
  const { params: { person } } = route
  return (
    <View style={style.back}>
      <View style={style.front}>
        <Image source={{ uri: person.pic }} style={style.picture} />
        <Text style={style.name}> {person.name} </Text>
        <Text style={style.info}> {person.info} </Text>
        <Text style={style.distance}> range: {person.dist} </Text>
        <ProfileText title={person.title} text={person.text} />
      </View>
    </View>
  )
}

export default ProfileScreen
