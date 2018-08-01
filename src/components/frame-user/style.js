import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Asset from '../../assets'
const { widths } = Dimensions.get('window')
const Styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 0.2,
    borderRadius: 1,
    backgroundColor: Asset.White,
    padding: 10,
    width: widths
  },
  constraint: {
    flexDirection: 'column',
    flex: 2
  },
  text: {
    fontSize: 18
  }
})

export default Styles
