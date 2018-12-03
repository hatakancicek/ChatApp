import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { black } from '../../Constants';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.root} >
          <ActivityIndicator size="large" color="#FAFAFA" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: black,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
