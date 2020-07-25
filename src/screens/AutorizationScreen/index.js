import React from 'react'
import { Text, View, Button } from 'react-native'

import styles from './style'

const AutorizationScreen = () => {
  return (
    <View style={styles.back}>
      <View style={styles.front}>
        <Text style={styles.active}>sdgfs</Text>
        <Text style={styles.notActive}>fffff</Text>
        <View style={styles.itemsContent}>
          <Text style={styles.item}> email</Text>
          <Text style={styles.item}> pass</Text>
          <Text style={styles.item}> pass again</Text>
          <Button style={styles.button} title="ff" />
        </View>
        <Text style={styles.about}>About us</Text>
      </View>
    </View>
  )
}

export default AutorizationScreen
