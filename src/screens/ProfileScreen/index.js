import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import propTypes from 'prop-types'
import ProfileInfoCard from '../../components/ProfileInfoCard/ProfileInfoCard'
import LinksBlock from '../../components/LinksBlock/LinksBlock'

import UserService from 'services/UserService'
import useRequest from 'hooks/useRequest'

import style from './style'

const ProfileScreen = ({ route }) => {
  const {
    params: { person },
  } = route

  const {
    params: { user },
  } = route
  const userId = 1
  const request = useCallback(() => {
    return UserService.getUser(userId)
  }, [userId])

  const { result, loading } = useRequest(request)

  return (
    <View style={style.back}>
      <ScrollView contentContainerStyle={style.front2}>
        <View style={style.front1}>
          <Image source={{ uri: person.photo }} style={style.picture} />
          <Text style={style.name}>
            {' '}
            {person.fn} {person.ln}{' '}
          </Text>
          <Text style={style.info}> {person.status} </Text>
          <Text style={style.distance}> range: 2 </Text>
          {person.infoCards.map(({ _id, title, text }) => (
            <ProfileInfoCard key={_id} title={title} text={text} />
          ))}
          <LinksBlock info={person.socialLinks} />
        </View>
      </ScrollView>
    </View>
  )
}

ProfileScreen.propTypes = {
  route: propTypes.object.isRequired,
}

export default ProfileScreen
