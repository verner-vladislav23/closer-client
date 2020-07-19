/* eslint-disable no-unused-expressions */
import React from 'react'
import { Text, View } from 'react-native'
import { style } from './style'

const ProfileText = ({ title, text }) => {
  <View>
    <Text style={style.header}> {title} </Text>
    <Text style={style.text}> {text} </Text>
  </View>
}

export default ProfileText
