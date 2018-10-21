import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

import { ApolloProvider } from 'react-apollo';

import client from './apollo/client';

import Chat from './pages/Chat';

// import 'config/ReactotronConfig';

export default class App extends Component {
  componentDidMount() {
    // console.tron.log();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Chat />
      </ApolloProvider>
    );
  }
}
