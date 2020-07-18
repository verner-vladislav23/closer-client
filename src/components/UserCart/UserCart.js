import React from 'react'
import PropTypes from 'prop-types'

import { View, Image, Text } from 'react-native'

import styles from './style'

const UserCart = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  )
}

UserCart.propTypes = {
  name: PropTypes.string.isRequired,
}

export default UserCart
