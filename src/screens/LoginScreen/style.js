import { StyleSheet } from 'react-native'
import Global from '../../constants/Global'

const styles = StyleSheet.create({
  active: {
    color: Global.COLORS.BLUE,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 25
  },
  notActive: {
    color: Global.COLORS.GRAY,
    fontWeight: 'bold',
    fontSize: 20,
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
    borderColor: Global.COLORS.LIGHTGRAY,
    marginBottom: 10
  },
  button: {
    justifyContent: 'center'
  },
  about: {
    flex: 1,
    color: Global.COLORS.LIGHTGRAY,
    paddingBottom: 30,
    textAlignVertical: 'bottom'
  },
  back: {
    flex: 1,
    padding: 20,
    backgroundColor: Global.COLORS.ORANGE
  },
  front: {
    flex: 1,
    backgroundColor: Global.COLORS.WHITE,
    borderRadius: 12,
    paddingTop: 60,
    alignItems: 'center'
  }
})

export default styles
