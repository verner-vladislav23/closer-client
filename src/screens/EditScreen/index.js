import React, { useCallback, useState } from 'react'
import propTypes from 'prop-types'
import { ScrollView, View, Text, Button, AsyncStorage, ActivityIndicator } from 'react-native'
import { Input } from 'components'

import UserService from 'services/UserService'
import useRequest from 'hooks/useRequest'

import style from './style'

const EditScreen = () => {
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  async function getUserName() {
    return UserService.getUser(await AsyncStorage.getItem('username'))
  }

  const request = useCallback(() => getUserName(), [])
  const { result, loadingGet } = useRequest(request)

  const onChangeFirstName = (userName) => {
    setFirstName(userName)
  }

  const onChangeLastName = (userName) => {
    setLastName(userName)
  }

  const onChangeEmail = (email) => {
    setEmail(email)
  }


  const onSubmit = useCallback(async () => {
    setLoading(true)

    try {
      await UserService.putUser({ firstName: firstName, lastName: lastName, email: email })
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }, [email, firstName, lastName])

  return (
    <View style={style.back}>
      <ScrollView contentContainerStyle={style.front2}>
        {loadingGet ? (
          <ActivityIndicator size='large' />
        ) : (
          <View style={style.front1}>
            {error == null ? (<Text>{error}</Text>) : (<Text/>)}
            <Text>FirstName</Text>
            <Input
              style={style.item}
              value={firstName}
              onChangeText={onChangeFirstName} />
            <Text>LastName</Text>
            <Input
              style={style.item}
              value={lastName}
              onChangeText={onChangeLastName} />
            <Text>Email</Text>
            <Input
              style={style.item}
              value={email}
              onChangeText={onChangeEmail} />
            <Button
              title='Edit'
              color='orange'
              disabled={loading}
              onPress={onSubmit} />
          </View>
        )}
      </ScrollView>
    </View>
  )
}

EditScreen.propTypes = {
  route: propTypes.object.isRequired,
}

export default EditScreen
