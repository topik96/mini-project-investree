import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Frame from '../../components/frame-user'
import Style from './style'

const User = () => {
  return (
    <View style={Style.container}>
      <Frame />
    </View>
  )
}

export default User