import React, { Component } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import Style from './style'
import API from '../../helpers'
import Asset from '../../assets'

class FrameUser extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentWillMount() {
    API()
      .then(res => {
        const filter = res.data.filter(data => {
          return data.age > 14
        })
        this.setState({
          data: filter
        })
      })
      .catch(err => console.log(err))
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
    if (this.state.data.length == 0) {
      return (
        <View>
          <ActivityIndicator size="large" color={Asset.Blue} />
        </View>
      )
    }
    return <FlatList data={this.state.data} renderItem={this._renderItem} />
  }
}

// const mapStateToProps = state => {
//   return {
//     dataUser: state
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => dispatch(fetchData())
//   }
// }

export default FrameUser
