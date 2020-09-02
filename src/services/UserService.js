import Http from './Http'
import { AsyncStorage } from 'react-native'

export default class UserService extends Http {
  static login (payload) {
    return this.post('/auth/login', payload)
  }

  static logout () {
    AsyncStorage.removeItem('jwt')
  }

  static registration (payload) {
    return this.post('/auth/register', payload)
  }

  static getUsers () {
    return this.get('/user/near-users')
  }

  static getUser (userId) {
    return this.get('/user/profile?username='+ userId)
  }

  static putUser(payload) {
    return this.put('/user/profile', payload)
  }
}
