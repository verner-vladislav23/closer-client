import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import style from './style'

const ProfileInfoCard = ({ title, text }) => (
  <View style={style.content}>
    <Text style={style.header}>{title}</Text>
    <Text style={style.text}>{text}</Text>
  </View>
)

ProfileInfoCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default ProfileInfoCard
