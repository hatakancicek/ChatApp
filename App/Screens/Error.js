import React, { Component } from 'react'
import { Button, StyleSheet, View, Text, } from 'react-native'
import { black } from '../../Constants';
import i18n from 'i18n-js';

export default class Error extends Component {
  render() {
    return (
      <View style={styles.root} >
        <Text style={styles.title} >
          {i18n.t("error_title")}
        </Text>
        <Button color="#FAFAFA" title={i18n.t("retry")} onPress={this.props.onPress} />
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
  title: {
    fontSize: 22,
    color: '#FAFAFA',
  }
});
