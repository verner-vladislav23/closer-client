import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import ProfileText from '../../components/ProfileText/ProfileText'
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon'
import style from './style'

const ProfileScreen = ({ route }) => {
  const { params: { person } } = route
  return (
    <View style={style.back}>
      <ScrollView contentContainerStyle={style.front2}>
        <View style={style.front1}>
          <Image source={{ uri: person.photo }} style={style.picture} />
          <Text style={style.name}> {person.fn} {person.ln} </Text>
          <Text style={style.info}> {person.status} </Text>
          <Text style={style.distance}> range: 2 </Text>
          {person.infoCards.map(({ _id, title, text }) => <ProfileText key={_id} title={title} text={text} />)}
          <ProfileIcon info={person.socialLinks} />
        </View>
      </ScrollView>
    </View>
  )
}

ProfileScreen.PropTypes = {
  route: PropTypes.object.isRequired
}

export default ProfileScreen
