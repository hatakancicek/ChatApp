import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View } from 'react-native';

const style = StyleSheet.create({
    root: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#263238',
    },
    wrapper: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    button: {
      padding: 20,
      borderWidth: 5,
      borderRadius: 4,
      borderColor: '#FFFF00',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      flex: 1,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FAFAFA',
      textAlign: 'center',
    }
  });

export default ({ text, isTop, ...props }) =>
    <View style={{
        ...style.wrapper,
        paddingTop: isTop ? 20 : 10,
        paddingBottom: isTop ? 10 : 20,
    }} >
    <TouchableOpacity {...props} style={style.button} >
      <Text style={style.text} >{text}</Text>
    </TouchableOpacity>   
  </View>