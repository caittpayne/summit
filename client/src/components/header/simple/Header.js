import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Header = () => (
    
    <View style={styles.container}>
        <Image source={ require('../images/logo.png')} style={styles.logo} />
    </View>
    
);

export default Header;