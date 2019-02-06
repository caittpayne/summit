import React from 'react';
import { View, Text } from 'react-native';
import { RegisterForm } from './Form';
import styles from './styles';


const Register = () => (
    <View style={styles.container}>
        <Text style={styles.headerText}>Create an Account</Text>
        <RegisterForm />
    </View>
);

export default Register;