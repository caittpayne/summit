import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/header/main';
import { Home } from "../components/Home";

class HomeScreen extends Component {
    render() {
        return(
            <Container>
                <StatusBar translucent={false} barStyle='default'/>
                <Header />
                <Home navigation={this.props.navigation} />
            </Container>
        )
    }
}
export default HomeScreen;