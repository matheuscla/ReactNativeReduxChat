import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const formRegister = props => (
  <View style={styles.form}>
    <View style={styles.formInput}>
      <TextInput value={props.name} style={styles.inputs} placeholder="Name" />
      <TextInput value={props.email} style={styles.inputs} placeholder="Email" />
      <TextInput value={props.password} style={styles.inputs} placeholder="Password" />
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

const mapStateToProps = state => (
  {
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password
  }
)

export default connect(mapStateToProps, null)(formRegister)
