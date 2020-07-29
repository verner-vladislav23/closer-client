import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'

import { Input } from 'components'
import UserService from 'services/UserService'

import styles from './style'

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (email) => {
    setEmail(email)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  const onSubmit = useCallback(async () => {
    setLoading(true)

    try {

      await UserService.login()

    } catch (error) {

    }

    setLoading(false)
  }, [email, password])

  return (
    <View style={styles.container}>
      <Input
        label='Email'
        value={email}
        placeholder='email'
        keyboardType='email-address'
        onChangeText={onChangeEmail}
      />
      <Input
        label='Password'
        value={password}
        placeholder='password'
        secureTextEntry
        onChangeText={onChangePassword}
      />
      <View>
        <Button
          title='Login'
          disabled={loading}
          onPress={onSubmit}
        />
      </View>
    </View>
  )
}

export default SignUpScreen
