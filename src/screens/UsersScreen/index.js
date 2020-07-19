import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'

import { UserCart } from 'components'

import UserService from 'services/UserService'
import useRequest from 'hooks/useRequest'

import styles from './style'

const UsersScreen = ({ navigation }) => {
  const request = useCallback(() => UserService.getUsers(), [])
  const { result, loading } = useRequest(request)

  const onSelectUser = (user) => {
    navigation.navigate('ProfileScreen', { user })
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={!!result && result.results}
          renderItem={({ item: user }, index) => (
            <UserCart key={index} onSelect={() => onSelectUser(user)} {...user} />
          )}
        />
      )}
    </View>
  )
}

UsersScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default UsersScreen
