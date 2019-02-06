import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Register } from '../components/Register';
import { Header } from '../components/header/simple';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle='default'/>
        <Header />
        <Register />
    </Container>
);