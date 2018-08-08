import React from 'react';

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Input from '../components/Input';

import styles from './styles';

const Chat = () => (
  <KeyboardAvoidingView style={styles.container} behavior={null} keyboardShouldPersistTaps="never">
    <ScrollView contentContainerStyle={styles.conversation}>
      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>
      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Igor</Text>
        <Text style={styles.message}>Ola TCC</Text>
      </View>
    </ScrollView>
    <Input />
  </KeyboardAvoidingView>
);

export default Chat;
