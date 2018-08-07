import React from 'react'
import { View, Text } from 'react-native'
import Frame from '../../components/frame-user'
import Style from './style'
import { fetchData } from './actions'
import { connect } from 'react-redux'
const MencariIlmu = props => {
  props.fetchData(25)
  return (
    <View style={Style.container}>
      <Frame />
    </View>
  )
}

export default connect(
  null,
  { fetchData }
)(MencariIlmu)
