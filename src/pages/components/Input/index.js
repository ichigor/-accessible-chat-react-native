import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Input extends Component {
  state = {
    message: '',
  }

  handleAddMessage = async () => {
    const { message } = this.state;
    const { author } = this.props;

    if (message.length > 0) {
      const newMessage = await this.props.addMessage({
        author,
        message,
      });
    }

    this.setState({ message: '' });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0)"
          value={this.state.message}
          onChangeText={message => this.setState({ message })}
        />
        <TouchableOpacity onPress={this.handleAddMessage}>
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const MessageMutation = gql`
  mutation(
    $author: String!
    $message: String!
  ) {
    createMessage(
      from: $author
      message: $message
    ) {
      id
      from
      message
    }
  }
`;

export default graphql(MessageMutation, {
  props: ({ ownProps, mutate }) => ({
    addMessage: ({ author, message }) => mutate({
      variables: { author, message },
      update: ownProps.onAddMessage,
    }),
  }),
})(Input);
