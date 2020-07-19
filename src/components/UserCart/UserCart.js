import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'react-native-elements'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from './style'

const AVATAR_URL =
  'https://wl-adme.cf.tsp.li/resize/728x/jpg/cf3/3eb/cebf385e9da99914a27f31c22d.jpg'

const UserCart = (props) => {
  const { name, onSelect } = props

  return (
    <ListItem
      title={name}
      subtitle="CEO"
      leftAvatar={{ source: { uri: AVATAR_URL } }}
      onPress={onSelect}
      chevron
      bottomDivider
    />
  )
}

UserCart.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
}

export default UserCart
