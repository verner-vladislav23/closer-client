import React from 'react'
import { Text, TextInput, View, KeyboardAvoidingView, Button } from 'react-native'

import styles from './style'

const LoginScreen = () => {
  return (
    <View style={styles.back}>
      <KeyboardAvoidingView style={styles.front} behavior="padding">
        <Text style={styles.notActive}>Register</Text>
        <Text style={styles.active}>Login</Text>
        <View style={styles.content}>
          <View style={styles.itemsContent} >
            <Text>Email</Text>
            <TextInput style={styles.item} />
            <Text>Password</Text>
            <TextInput style={styles.item} />
          </View>
          <View style={styles.button}>
            <Button title="login" color="orange" />
          </View>
        </View>
        <Text style={styles.about}>About us</Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen
