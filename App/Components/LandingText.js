import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LandıngText extends React.Component {

    render() {
        return (
        <View style={{
            ...styles.container,
            backgroundColor: this.props.color,
            flex: this.props.flex,
            }}>
            <Text>{this.props.text}</Text>
        </View>
        )
    }
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});