import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { ListItem, Badge } from 'react-native-elements'

import styles from './style'

const AVATAR_URL =
  'https://wl-adme.cf.tsp.li/resize/728x/jpg/cf3/3eb/cebf385e9da99914a27f31c22d.jpg'

const UserCart = (props) => {
  const { name, onSelect } = props

  return (
    <ListItem
      title={name}
      subtitle='CEO'
      badge={{
        value: <Text style={{ color: 'white' }}>{22}m</Text>,
        textStyle: {
          color: 'white',
        },
        containerStyle: {
          padding: 10,
        },
        badgeStyle: {
          backgroundColor: 'grey',
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 6,
          paddingRight: 6,
        },
      }}
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
