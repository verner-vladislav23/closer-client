import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  name: {
    color: '#54B0F3',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 17
  },
  info: {
    color: '#797F85',
    paddingVertical: 5
  },
  distance: {
    color: '#C4C4C4',
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
    backgroundColor: '#EE6C4D'
  },
  front1: {
    flex: 1,
    margin: 10,
    alignItems: 'center'
  },
  front2: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center'
  }
})

export default styles
