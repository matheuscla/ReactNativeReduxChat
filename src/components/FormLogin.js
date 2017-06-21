import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>ReactNativeReduxChat</Text>
    </View>
    <View style={styles.form}>
      <TextInput style={styles.textInput} placeholder="E-mail" />
      <TextInput style={styles.textInput} placeholder="Password" />
      <Text style={styles.registerText} >Aren't registered? Sign up</Text>
    </View>
    <View style={styles.actions}>
      <Button title="Sign In" color="#115e54" onPress={() => false}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 25
  },
  form: {
    flex: 2
  },
  textInput: {
    fontSize: 20,
    height: 45
  },
  registerText: {
    fontSize: 20
  },
  actions: {
    flex: 2
  }
})
