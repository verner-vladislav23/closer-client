import React, { useCallback } from 'react'
import propTypes from 'prop-types'
import { ScrollView, View, Image, Text } from 'react-native'

// import ProfileInfoCard from 'components/ProfileInfoCard/ProfileInfoCard'
// import LinksBlock from 'components/LinksBlock/LinksBlock'

import UserService from 'services/UserService'
import useRequest from 'hooks/useRequest'

import style from './style'

const EditScreen = ({ route }) => {
  const {
    params: { user },
  } = route

  // const userId = 1
  // const request = useCallback(() => {
  //   return UserService.getUser(userId)
  // }, [userId])

  // const { result: person, loading } = useRequest(request)
  console.log(user)

  return (
    <View style={style.back}>
      <ScrollView contentContainerStyle={style.front2}>
        <View style={style.front1}>
          <Text>dd</Text>
        </View>
      </ScrollView>
    </View>
  )
}

EditScreen.propTypes = {
  route: propTypes.object.isRequired,
}

export default EditScreen
