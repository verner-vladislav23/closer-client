import Http from './Http'

export default class UserService extends Http {
  static login() {}

  static logout() {}

  static registration() {}

  static getUsers() {
    return this.get('/people')
  }

  static getUser(userId) {
    return this.get(`/people/${userId}`)
  }
}
