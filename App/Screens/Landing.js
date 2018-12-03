import React from 'react';
import { black } from '../../Constants';
import LandingButton from '../Components/LandingButton';
import { StyleSheet, View } from 'react-native';
import i18n from 'i18n-js';

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: black,
  },
});

export default class App extends React.Component {
  render() {
    const { openQR } = this.props;

    return (
      <View style={style.root} >
        <LandingButton 
          isTop={true} 
          text={i18n.t("start_c")} 
        />
        <LandingButton 
          text={i18n.t("QR_show")} 
          onPress={openQR}
        />
      </View>
    );
  };
};