import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SignInForm } from './Form'
import { AltAuth } from './AltAuth';
import styles from './styles';


const SignIn = () => (
    <View style={styles.container}>
       <Text style={styles.headerText}>Sign In</Text>
       <SignInForm />
        <AltAuth />
        <TouchableOpacity
                underlayColor='#fff'
                style={{marginTop: 20}}>
                <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
);

export default SignIn;