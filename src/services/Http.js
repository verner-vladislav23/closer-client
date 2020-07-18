import Config from 'expo-constants'

const {
  extra: { API_URL },
} = Config.manifest

export default class Http {
  static BASE_URL = API_URL;

  static async _parseResponse(response) {
    return await response.json()
  }

  static async get(url, options = {}) {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: 'GET',
    })

    return this._parseResponse(response)
  }
}
