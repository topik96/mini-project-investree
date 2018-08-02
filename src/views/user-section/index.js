import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Frame from '../../components/frame-user'
import Style from './style'
import store from '../../redux'
import { Provider } from 'react-redux'
const User = () => {
  return (
    <Provider store={store}>
      <View style={Style.container}>
        <Frame />
      </View>
    </Provider>
  )
}

export default User
