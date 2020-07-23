import { StyleSheet } from 'react-native'
import Global from '../../constants/Global'

const styles = StyleSheet.create({
  name: {
    color: Global.COLORS.BLUE,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 17
  },
  info: {
    color: Global.COLORS.GRAY,
    paddingVertical: 5
  },
  distance: {
    color: Global.COLORS.LIGHTGRAY,
    paddingBottom: 20
  },
  picture: {
    borderRadius: 12,
    width: 150,
    height: 150
  },
  back: {
    flex: 1,
    padding: 20,
    //paddingTop: 65,
    backgroundColor: Global.COLORS.ORANGE
  },
  front1: {
    flex: 1,
    margin: 10,
    alignItems: 'center'
  },
  front2: {
    flexGrow: 1,
    backgroundColor: Global.COLORS.WHITE,
    borderRadius: 12,
    justifyContent: 'center'
  }
})

export default styles
