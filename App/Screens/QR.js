import React from 'react'
import { StyleSheet, View, Animated, Button } from 'react-native'
import QRCode from 'react-native-qrcode';
import { black, FADE_DURATION } from '../../Constants';
import { scale } from 'react-native-size-matters';
import i18n from 'i18n-js';

export default class extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    isHidden: true,
    timeout: null,
  };

  show = _ => {
    const { opacity, timeout } = this.state;

    clearTimeout(timeout);

    this.setState({
      isHidden: false,
    });
    Animated.sequence([
      Animated.timing(
        opacity
      ).stop(),
      Animated.timing(
        opacity,
        {
          toValue: 1,
          duration: FADE_DURATION,
        },
      ).start()
    ]);
  };

  hide = _ => {
    const { opacity, timeout } = this.state;

    clearTimeout(timeout);

    Animated.sequence([
      Animated.timing(
        opacity
      ).stop(),
      Animated.timing(
        opacity,
        {
          toValue: 0,
          duration: FADE_DURATION,
        },
      ).start()
    ]);

    this.setState({
      timeout: setTimeout(_ => 
      this.setState({
        isHidden: true,
      }), FADE_DURATION),
    });
  }

  render(){
    const { value, onPress } = this.props;
    const { isHidden, opacity } = this.state;

    return (
      <Animated.View style={{
        ...(isHidden 
          ? styles.hidden
          : styles.root),
        opacity, 
      }} >
        <QRCode
          value={value}
          size={scale(220)}
          bgColor='white'
          fgColor='black'/>
        <View style={styles.divider} />
        <Button 
          title={i18n.t("close")}
          color="#FAFAFA"
          onPress={onPress}
        />
      </Animated.View>
    );
  };
};

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
    divider: {
      alignSelf: 'stretch',
      height: scale(30),
    },
    hidden: {
      width: 0,
      height: 0,
      position: 'absolute',
    },
  });