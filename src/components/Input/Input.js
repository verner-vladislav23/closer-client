import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Text } from 'react-native'

import styles from './style'

const Input = ({ label, style, ...props }) => {


  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        {...props}
        style={[style, styles.input]}
      />
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object
}

export default Input
