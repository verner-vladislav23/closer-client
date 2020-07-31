import React, { useCallback, useState } from 'react'
import { View, Text, Button } from 'react-native'

import { Input } from 'components'
import UserService from 'services/UserService'

import styles from './style'

const SignUpScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [firstN, setFirstName] = useState('')
  const [secondN, setSecondName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onScreenChange = () => {
    navigation.navigate('LoginScreen')
  }

  const onChangeFirstName = (firstN) => {
    setFirstName(firstN)
  }

  const onChangeSecondName = (secondN) => {
    setSecondName(secondN)
  }

  const onChangeUserName = (userName) => {
    setUserName(userName)
  }

  const onChangeEmail = (email) => {
    setEmail(email)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  const onSubmit = useCallback(async () => {
    setLoading(true)

    try {

      await UserService.registration ({ firstName: firstN, lastName: secondN, username: userName, email: email, password: password })

    } catch (error) {

    }

    setLoading(false)
  }, [firstN, secondN, userName, email, password])

  return (
    <View style={styles.back}>
      <View style={styles.front} behavior='padding'>
        <Text style={styles.active}>Register</Text>
        <Text style={styles.notActive} onPress={onScreenChange}>Login</Text>
        <View style={styles.content}>
          <View style={styles.itemsContent} >
            <Text>First name</Text>
            <Input
              style={styles.item}
              value={firstN}
              onChangeText={onChangeFirstName} />
            <Text>Second name</Text>
            <Input
              style={styles.item}
              value={secondN}
              onChangeText={onChangeSecondName} />
            <Text>Username</Text>
            <Input
              style={styles.item}
              value={userName}
              onChangeText={onChangeUserName} />
            <Text>Email</Text>
            <Input
              style={styles.item}
              value={email}
              keyboardType='email-address'
              onChangeText={onChangeEmail} />
            <Text>Password</Text>
            <Input style={styles.item}
              value={password}
              secureTextEntry
              onChangeText={onChangePassword} />
          </View>
          <View style={styles.button}>
            <Button
              title='register'
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

export default SignUpScreen
