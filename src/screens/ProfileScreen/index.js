import React, { useCallback } from 'react'
import propTypes from 'prop-types'
import { ScrollView, View, Image, Text } from 'react-native'

import ProfileInfoCard from 'components/ProfileInfoCard/ProfileInfoCard'
import LinksBlock from 'components/LinksBlock/LinksBlock'

import UserService from 'services/UserService'
import useRequest from 'hooks/useRequest'

import style from './style'

const AVATAR_URL =
  'https://wl-adme.cf.tsp.li/resize/728x/jpg/cf3/3eb/cebf385e9da99914a27f31c22d.jpg'

const ProfileScreen = ({ route }) => {
  const {
    params: { user },
  } = route

  const userId = 1
  const request = useCallback(() => {
    return UserService.getUser(userId)
  }, [userId])

  const { result: person, loading } = useRequest(request)

  return (
    <View style={style.back}>
      <ScrollView contentContainerStyle={style.front2}>
        {!!person && (
          <View style={style.front1}>
            <Image source={{ uri: AVATAR_URL }} style={style.picture} />
            <Text style={style.name}>
              {' '}
              {person.name} {person.ln}{' '}
            </Text>
            <Text style={style.info}>{person.status}</Text>
            <Text style={style.distance}>range: 2</Text>
            {/*{person.infoCards.map(({ _id, title, text }) => (*/}
            {/*  <ProfileInfoCard key={_id} title={title} text={text} />*/}
            {/*))}*/}
            <LinksBlock info={person.socialLinks} />
          </View>
        )}
      </ScrollView>
    </View>
  )
}

ProfileScreen.propTypes = {
  route: propTypes.object.isRequired,
}

export default ProfileScreen
