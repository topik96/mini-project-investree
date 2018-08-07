/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import AppNavigation from './src/views/root-navigation'
import { Provider } from 'react-redux'
import store from './src/redux'
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
export default App
