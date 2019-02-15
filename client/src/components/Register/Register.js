import React, { Component } from "react";
import { View, Text } from "react-native";
import { RegisterForm } from "./Form";
import styles from "./styles";

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Create an Account</Text>
        <RegisterForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Register;
