import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const AltAuth = () => (
  
    <View>
        <View style={{paddingBottom: 30, alignItems: 'center' }}>
            <View style={{ borderBottomColor: '#bdbdbd', borderBottomWidth: 1, width: '90%' }} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>or connect with</Text>
            </View>
        </View>
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.facebookButton}
                underlayColor='#fff'>
                <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.googleButton}
                underlayColor='#fff'>
            <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>
        </View>
    </View>

);

export default AltAuth;