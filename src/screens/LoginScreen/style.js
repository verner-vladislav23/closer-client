import { StyleSheet } from 'react-native'
import { BLUE, GRAY, LIGHTGRAY, ORANGE, WHITE } from 'constants/colors'

const style = StyleSheet.create({
  active: {
    color: BLUE,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 25
  },
  notActive: {
    color: GRAY,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 25
  },
  errorMessage: {
    color: ORANGE,
    paddingTop: 25
  },
  content: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingHorizontal: 30
  },
  itemsContent: {
    flex: 3,
    paddingRight: 30
  },
  item: {
    borderBottomWidth: 1,
    borderColor: LIGHTGRAY,
    marginBottom: 10
  },
  button: {
    justifyContent: 'center'
  },
  about: {
    flex: 1,
    color: LIGHTGRAY,
    paddingBottom: 30,
    textAlignVertical: 'bottom'
  },
  back: {
    flex: 1,
    padding: 20,
    backgroundColor: ORANGE
  },
  front: {
    flex: 1,
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingTop: 60,
    alignItems: 'center'
  }
})

export default style
