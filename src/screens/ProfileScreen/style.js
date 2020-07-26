import { StyleSheet } from 'react-native'
import { BLUE, GRAY, LIGHTGRAY, ORANGE, WHITE } from 'constants/colors'

const styles = StyleSheet.create({
  name: {
    color: BLUE,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 17,
  },
  info: {
    color: GRAY,
    paddingVertical: 5,
  },
  distance: {
    color: LIGHTGRAY,
    paddingBottom: 20,
  },
  picture: {
    borderRadius: 12,
    width: 150,
    height: 150,
  },
  back: {
    flex: 1,
    padding: 20,
    backgroundColor: ORANGE,
  },
  front1: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  front2: {
    flexGrow: 1,
    backgroundColor: WHITE,
    borderRadius: 12,
    justifyContent: 'center',
  },
})

export default styles
