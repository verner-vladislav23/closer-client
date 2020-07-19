import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  name: {
    color: '#54B0F3',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20
  },
  info: {
    color: '#797F85'
  },
  distance: {
    color: '#C4C4C4'
  },
  picture: {
    borderRadius: 12,
    width: 150,
    height: 150
  },
  back: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#EE6C4D',
    margin: 50
  },
  front: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center'
  }
})

export default styles
