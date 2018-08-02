/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import Home from './src/views'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home navigation={this.props.navigation} />
      </View>
    )
  }
}
export default App
