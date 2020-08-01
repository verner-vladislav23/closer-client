import React, { useCallback, useState } from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

import { Input } from 'components'
import UserService from 'services/UserService'

import styles from './style'

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const onScreenChange = () => {
    navigation.navigate('SignUpScreen')
  }

  const onChangeUserName = (userName) => {
    setUserName(userName)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  const onSubmit = useCallback(async () => {
    setLoading(true)

    try {
      const response = await UserService.login({ username: userName, password: password })
      if (response.status == 'ok') {
        AsyncStorage.setItem('jwt', response.data)
        navigation.navigate('UsersScreen')
      } else {
        setErrorMessage(response.message)
        // todo читаемый вид ошибки
      }
    } catch (error) {

    }
    setLoading(false)
  }, [userName, password])

  return (
    <View style={styles.back}>
      <View style={styles.front} behavior='padding'>
        <Text style={styles.notActive} onPress={onScreenChange}>Register</Text>
        <Text style={styles.active}>Login</Text>
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <View style={styles.content}>
          <View style={styles.itemsContent} >
            <Text>Username</Text>
            <Input
              style={styles.item}
              value={userName}
              onChangeText={onChangeUserName} />
            <Text>Password</Text>
            <Input style={styles.item}
              value={password}
              secureTextEntry
              onChangeText={onChangePassword} />
          </View>
          <View style={styles.button}>
            <Button
              title='login'
              color='orange'
              disabled={loading}
              onPress={onSubmit} />
          </View>
        </View>
        <Text style={styles.about}>About us</Text>
      </View>
    </View>
  )
}

export default LoginScreen

