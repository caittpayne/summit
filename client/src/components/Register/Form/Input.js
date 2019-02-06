import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FormInput, FormValidationMessage, FormLabel, Button } from 'react-native-elements';

class Input extends PureComponent {
    _handleChange = value => {
       this.props.onChange(this.props.name, value); 
    };

    _handleTouch = () => {
        this.props.onTouch(this.props.name)
    }
    render() {
        const { label, error, ...rest } = this.props;
        return (
            <View style={styles.form}>
                <FormLabel>{ label }</FormLabel>
                <FormInput 
                    onChangeText={this._handleChange} 
                    onBlur={this._handleTouch}
                    placeholder={label} 
                    {...rest} 
                    />
                {error && <FormValidationMessage>{error}</FormValidationMessage>}
            </View>
        )
    }
}

export default Input;
