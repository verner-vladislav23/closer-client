import React from 'react'
import { Text, View, Image } from 'react-native'
import style from './style'

const vkIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDp8BQwkfmO3Q56vupJo_32Pg-r1JJ-2re-Du4O4wV6XD3x0y&s'
const instagramIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png'
const d = 'https://wl-adme.cf.tsp.li/resize/728x/jpg/cf3/3eb/cebf385e9da99914a27f31c22d.jpg'

const ProfileIcon = ({ info }) => (
  <View style={style.content}>
    <Text style={style.text}> Как связаться </Text>
    <View style={style.pictureContent}>
      <Image source={{ uri: vkIcon }} style={style.picture} />
      <Image source={{ uri: instagramIcon }} style={style.picture} />
    </View>
  </View>
)

export default ProfileIcon
