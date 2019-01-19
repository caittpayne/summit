import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import logo from '../../../../assets/logo.png';
const Header = () => {
    <View>
        <TouchableOpacity>
            <Image source={logo} />
        </TouchableOpacity>
    </View>
};

export default Header;