import Http from './Http'
import { AsyncStorage } from 'react-native'

export default class UserService extends Http {
  static login (payload) {
    return this.post('/auth/login', payload)
  }

  static logout () {}

  static registration (payload) {
    return this.post('/auth/register', payload)
  }

  static getUsers () {
    return this.get('/user/near-users')
  }

  static getUser (userId) {
    return this.get(`/user/profile/${userId}`)
  }
}
