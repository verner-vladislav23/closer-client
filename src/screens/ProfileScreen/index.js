import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const ProfileScreen = ({ route }) => {
  const {
    params: { user },
  } = route
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
