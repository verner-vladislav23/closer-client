import Geolocation from 'react-native-geolocation-service'

import { AppState } from 'react-native'
import { useState, useEffect } from 'react'

const useGeolocation = () => {
  let error = ''
  let position = { latitude: 0, longitude: 0 }

  Geolocation.getCurrentPosition(
    pos => {
      position.latitude = pos.coords.latitude,
      position.longitude = pos.coords.longitude
    },
    e => {
      error = e.message
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })

  return [error, position]
}

export default useGeolocation
