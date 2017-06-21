import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default props => (
  <View style={styles.form}>
    <View style={styles.formInput}>
      <TextInput style={styles.inputs} placeholder="Name" />
      <TextInput style={styles.inputs} placeholder="Email" />
      <TextInput style={styles.inputs} placeholder="Password" />
    </View>
    <View style={styles.formAction}>
      <Button title="Register" color="#115e54" onPress={() => false} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10
  },
  formInput: {
    flex: 4,
    justifyContent: 'center'
  },
  inputs: {
    fontSize: 20,
    height: 45
  },
  formAction: {
    flex: 1
  }
})
