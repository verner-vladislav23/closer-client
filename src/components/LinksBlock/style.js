import { StyleSheet } from 'react-native'
import Global from '../../constants/Global'

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
    paddingTop: 15
  },
  text: {
    color: Global.COLORS.ORANGE,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  pictureContent: {
    flex: 1,
    flexDirection: 'row',
  },
  picture: {
    width: 40,
    height: 40,
    marginRight: 20
  }
})

export default styles
