import React from 'react';
import LandingButton from './App/Components/LandingButton';
import { StyleSheet, SafeAreaView } from 'react-native';

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#263238',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={style.root} >
        <LandingButton isTop={true} text="Konuşma Başlat" />
        <LandingButton text="QR Göster" />
      </SafeAreaView>
    );
  };
};