import { StyleSheet } from 'react-native'
import { ORANGE, LIGHTGRAY } from 'constants/colors'

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
    paddingBottom: 15,
  },
  header: {
    color: ORANGE,
    fontWeight: 'bold',
  },
  text: {
    color: LIGHTGRAY,
  },
})

export default styles
