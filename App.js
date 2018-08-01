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
import store from './src/redux'
import { Provider } from 'react-redux'
class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Home navigation={this.props.navigation} />
        </Provider>
      </View>
    )
  }
}
export default App
