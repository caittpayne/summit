import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container } from "../components/Container";
import { Register } from "../components/Register";
import { Header } from "../components/header/simple";

class RegisterScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Header />
        <Register navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default RegisterScreen;
