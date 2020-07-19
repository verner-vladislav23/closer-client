import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import UserService from 'services/UserService'
import useRequest from 'hooks/useRequest'

const ProfileScreen = ({ route }) => {
  const {
    params: { user },
  } = route
  const userId = 1
  const request = useCallback(() => {
    return UserService.getUser(userId)
  }, [userId])

  const { result, loading } = useRequest(request)

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  )
}

ProfileScreen.propTypes = {
  route: PropTypes.object.isRequired,
}

export default ProfileScreen
