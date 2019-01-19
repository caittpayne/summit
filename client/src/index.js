import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
    $primaryWhite: '#FFFFFF',
    $mainFont: 'HelveticaNeue-Medium'
});

export default () => <Home />;