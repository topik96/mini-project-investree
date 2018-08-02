import React from 'react'
import { StackNavigator, TabBarBottom } from 'react-navigation'
import App from '../../App'
import User from '../views/user-section'
import Custom from '../views/custom'
import TabNavigation from './tab-navigation'
import Home from './index'

export const RootNavigation = StackNavigator({
  Home: {
    screen: Home,
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
  TabNavigation: {
    screen: TabNavigation,
    navigationOptions: {
      title: 'User'
    }
  }
})

export default RootNavigation
