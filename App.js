import React from 'react';
import { black } from './Constants';
import { StyleSheet, SafeAreaView } from 'react-native';
import i18n from 'i18n-js';
import firebase from 'firebase';
import Config from './Config';
import { Localization } from 'expo-localization';
import Landing from './App/Screens/Landing';
import Loading from './App/Screens/Loading';
import Error from './App/Screens/Error';
import QR from './App/Screens/QR';

import { en, tr } from './Languages';

import 'firebase/firestore';

firebase.initializeApp(Config);

i18n.fallbacks = true;
i18n.translations = { tr, en };
i18n.locale = Localization.locale;
i18n.defaultLocale = "en-EN";

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: black,
  },
});

export default class App extends React.Component {
  state = {
    user: undefined,
  };

  login = async _ => {
    this.setState({ user: undefined });
    try {
      firebase.auth().signInAnonymously();
    } catch (err) {
      console.log(err);
      this.setState({ error: true, });
    };
  };

  componentDidMount() {
    this.login();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.uid });
      } else {
        this.setState({ user: null });
      };
    });
  };

  openQR = _ =>
    this.refs.qr.show();

  closeQR = _ =>
    this.refs.qr.hide();

  render() {
    const { user, showQR } = this.state;
    const { closeQR, openQR } = this;

    return (
      <SafeAreaView style={style.root} >
        { user &&
          <Landing openQR={openQR} user={user} />}
        { user &&
          <QR 
            ref="qr"
            value={user} 
            onPress={closeQR} 
          />}
        {user === undefined 
          && <Loading />}
        {user === null 
          && <Error onPress={this.login} />}
      </SafeAreaView>
    );
  };
};