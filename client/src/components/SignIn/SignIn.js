import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SignInForm } from './Form'
import styles from './styles';

class SignIn extends Component {    
    render() {

        return(
            <View style={styles.container}>
            <Text style={styles.headerText}>Sign In</Text>
            <SignInForm />
             <TouchableOpacity
                     underlayColor='#fff'
                     style={{marginTop: 20}}
                     onPress={() => this.props.navigation.navigate('Register')}>
                     <Text style={styles.buttonText}>Register</Text>
             </TouchableOpacity>
         </View>
        )
    }
}

export default SignIn;