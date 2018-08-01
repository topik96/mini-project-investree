import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import User from './user-section'
import MencariIlmu from './user-section/mencari-ilmu'
import Berpengalaman from './user-section/berpengalaman'
import MencariPengalaman from './user-section/mencari-pengalaman'
import Asset from '../assets'
export const TabNavigation = TabNavigator({
  User: {
    screen: User,
    navigationOptions: {
      tabBarLabel: 'All',
      tabBarIcon: (
        <Image source={Asset.AllUsers} style={{ width: 35, height: 35 }} />
      )
    }
  },
  MencariIlmu: {
    screen: MencariIlmu,
    navigationOptions: {
      tabBarLabel: '15-25',
      tabBarIcon: (
        <Image source={Asset.LFKnowledge} style={{ width: 30, height: 30 }} />
      )
    }
  },
  MencariPengalaman: {
    screen: MencariPengalaman,
    navigationOptions: {
      tabBarLabel: '25-35',
      tabBarIcon: (
        <Image source={Asset.LFExperience} style={{ width: 30, height: 30 }} />
      )
    }
  },
  Berpengalaman: {
    screen: Berpengalaman,
    navigationOptions: {
      tabBarLabel: '35-40',
      tabBarIcon: (
        <Image source={Asset.Experienced} style={{ width: 30, height: 30 }} />
      )
    }
  }
})

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default TabNavigation
