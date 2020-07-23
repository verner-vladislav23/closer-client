import { StyleSheet } from 'react-native'
import Global from '../../constants/Global'

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
    paddingBottom: 15
  },
  header: {
    color: Global.COLORS.ORANGE,
    fontWeight: 'bold'
  },
  text: {
    color: Global.COLORS.LIGHTGRAY
  }
})

export default styles
