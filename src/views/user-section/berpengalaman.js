import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Frame from '../../components/frame-user'
import Style from './style'
import { fetchData } from './actions'
import { connect } from 'react-redux'
const Berpengalaman = props => {
  props.fetchData(40)
  return (
    <View style={Style.container}>
      <Frame />
    </View>
  )
}

export default connect(
  null,
  { fetchData }
)(Berpengalaman)
