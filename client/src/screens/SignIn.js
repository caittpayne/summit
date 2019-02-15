import React, { Component } from "react";
import { StatusBar } from "react-native";
import { SignIn } from "../components/SignIn";
import { Container } from "../components/Container";
import { Header } from "../components/header/main";

class SignInScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Header />
        <SignIn navigation={this.props.navigation} />
      </Container>
    );
  }
}
export default SignInScreen;
