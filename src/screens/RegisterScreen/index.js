import React from 'react'
import { Text, TextInput, View, KeyboardAvoidingView, Button } from 'react-native'

import styles from './style'

const RegisterScreen = () => {
  return (
    <View style={styles.back}>
      <KeyboardAvoidingView style={styles.front} behavior="padding">
        <Text style={styles.active}>Register</Text>
        <Text style={styles.notActive}>Login</Text>
        <View style={styles.content}>
          <View style={styles.itemsContent} >
            <Text>Email</Text>
            <TextInput style={styles.item} />
            <Text>Password</Text>
            <TextInput style={styles.item} />
            <Text>Password again</Text>
            <TextInput style={styles.item} />
          </View>
          <View style={styles.button}>
            <Button title="Reg" color="orange" />
          </View>
        </View>
        <Text style={styles.about}>About us</Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen
