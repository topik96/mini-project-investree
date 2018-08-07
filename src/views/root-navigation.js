import React from 'react'
import { createStackNavigator } from 'react-navigation'
import App from '../../App'
import User from '../views/user-section'
import Custom from '../views/custom'
import TabNavigation from './tab-navigation'
import Home from './index'

export const RootNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  User: {
    screen: User
  },
  Custom: { screen: Custom },
  TabNavigation: {
    screen: TabNavigation
  }
})

export default RootNavigation
