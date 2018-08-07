import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { fetchData } from './actions'
import Frame from '../../components/frame-user'
import Style from './style'
import { connect } from 'react-redux'

const MencariPengalaman = props => {
  props.fetchData(35)
  return (
    <View style={Style.container}>
      <Frame />
    </View>
  )
}

const mapDispatchToProps = dispatch => {
  return { fetchData: age1 => dispatch(fetchData(age1)) }
}

export default connect(
  null,
  mapDispatchToProps
)(MencariPengalaman)
