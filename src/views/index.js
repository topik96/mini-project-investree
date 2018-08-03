/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from 'react-native'
import Asset from '../assets'

console.disableYellowBox = true
const { width } = Dimensions.get('window')
const Home = props => {
  return (
    <View style={styles.container}>
      <Image source={Asset.ProfilIcon} style={{ top: -20 }} />
      <View style={styles.wrapButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('TabNavigation')
          }}
        >
          <Text style={styles.texButton}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Custom')
          }}
        >
          <Text style={styles.texButton}>Custom</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Asset.White
  },
  wrapButton: {
    flex: 3,
    top: 5,
    padding: 5
  },
  button: {
    height: 65,
    top: 0,
    padding: 10,
    marginBottom: 10,
    width: width - 15,
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: Asset.Blue
  },
  texButton: {
    fontSize: 23,
    color: Asset.White,
    fontWeight: 'bold',
    marginVertical: 10
  }
})

export default Home
