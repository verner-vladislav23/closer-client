import Http from './Http'
import { AsyncStorage } from 'react-native'

export default class UserService extends Http {
  static login () {}

  static logout () {}

  static registration (payload) {
    return this.post('/')
  }

  static getUsers () {
    return this.get('/people')
  }

  static getUser (userId) {
    return this.get(`/people/${userId}`)
  }
}
