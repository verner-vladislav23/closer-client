import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'

import styles from './styles'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input label='Email' placeholder='Email' />
      <Input label='Password' placeholder='Password' />
      <Button title='Login' onPress={() => console.log('submit')} />
    </View>
  )
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default LoginScreen
