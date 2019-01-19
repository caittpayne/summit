import React from 'react';
import { StatusBar } from 'react-native';
import { SignIn, styles } from '../components/SignIn';
import { Container } from '../components/Container';
import { Header } from '../components/header/main';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle='default'/>
        <Header />
        <SignIn />
    </Container>
);