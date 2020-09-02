import Config from 'expo-constants'
import { AsyncStorage } from 'react-native'

const {
  extra: { API_URL },
} = Config.manifest

export default class Http {
  static BASE_URL = API_URL;

  static async _parseResponse(response) {
    return await response.json()
  }

  static async get (url, options) {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': await AsyncStorage.getItem('jwt')
      },
      body: JSON.stringify(options)
    })
    return this._parseResponse(response)
  }

  static async post (url, payload) {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    return this._parseResponse(response)
  }

  static async put (url, options = {}) {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': await AsyncStorage.getItem('jwt')
      },
      body: JSON.stringify(options)
    })
    return this._parseResponse(response)
  }
}
