import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProfileText = ({title, text}) => {
    return (
        <View>
            <Text style={styles.header}> {title} </Text>
            <Text style={styles.text}> {text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color: '#EE6C4D',
    },
    text: {
        color: '#293241'
    }
  })

export default ProfileText