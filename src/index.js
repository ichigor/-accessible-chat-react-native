import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

import OneSignal from 'react-native-onesignal';

import { ApolloProvider } from 'react-apollo';

import client from './apollo/client';

import Chat from './pages/Chat';

// import 'config/ReactotronConfig';

export default class App extends Component {
  componentDidMount() {
    OneSignal.init("19704337-6377-4414-8511-31c08633ae59");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received:", notification);
  }

  onOpened(result) {
    console.log('Message:', result.notification.payload.body);
    console.log('Data:', result.notification.payload.additionalData);
    console.log('isActive:', result.notification.isAppInFocus);
    console.log('Result:', result);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Chat />
      </ApolloProvider>
    );
  }
}
