import React, { useCallback, useState } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'

import { UserCart } from 'components'

import UserService from 'services/UserService'
import useRequest from 'hooks/useRequest'

import styles from './style'

const UsersScreen = () => {
  const request = useCallback(() => UserService.getUsers(), [])
  const { result, loading } = useRequest(request)

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={!!result && result.results}
          renderItem={({ item: user }, index) => <UserCart key={index} {...user} />}
        />
      )}
    </View>
  )
}

export default UsersScreen
