import React, { PureComponent } from "react";
import { View } from "react-native";

import { FormInput, FormValidationMessage } from "react-native-elements";

class Input extends PureComponent {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };
  render() {
    const { label, error, ...rest } = this.props;
    return (
      <View>
        <FormInput
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          autoFocus={true}
          placeholder={label}
          {...rest}
        />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    );
  }
}

export default Input;
