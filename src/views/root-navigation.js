import React from 'react'
import { StackNavigator, TabBarBottom } from 'react-navigation'
import App from '../../App'
import User from '../views/user-section'
import Custom from '../views/custom'
import TabNavigation from './tab-navigation'
import Home from './index'

export const RootNavigation = StackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      header: null
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      header: null
    }
  },
  Custom: { screen: Custom },
  Home: { screen: Home },
  TabNavigation: { screen: TabNavigation }
})

export default RootNavigation
