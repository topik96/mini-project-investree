import React, { Component } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native'
import Style from './style'
import API from '../../helpers'
import Asset from '../../assets'
import { fetchData } from '../../views/user-section/actions'
import { connect } from 'react-redux'
class FrameUser extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    this.props.fetchData()
  }
  _renderItem = ({ item }) => {
    return (
      <View key={item._id} style={Style.container}>
        <View
          style={{
            flexBasis: 80,
            flexDirection: 'column'
          }}
        >
          <Image source={Asset.Profil} style={{ width: 60, height: 60 }} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={Style.text}> {item._id}</Text>
          <Text style={Style.text}> {item.name}</Text>
          <Text style={Style.text}> {item.age}</Text>
        </View>
      </View>
    )
  }

  render() {
    if (this.props.data.length == 0) {
      return (
        <View>
          <ActivityIndicator size="large" color={Asset.Blue} />
        </View>
      )
    }
    return <FlatList data={this.props.data} renderItem={this._renderItem} />
  }
}

const mapStateToProps = state => {
  return {
    data: state.user.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameUser)
