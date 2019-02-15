import React, { PureComponent } from "react";
import { View, Picker, Alert } from "react-native";
import styles from "./styles";

class UnitPicker extends PureComponent {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };
  render() {
    const { label, error, ...rest } = this.props;
    return (
      <View style={styles.picker}>
        <Picker
          onValueChange={this._handleChange}
          onBlur={this._handleTouch}
          {...rest}
        >
          <Picker.Item label="Imperial" value="imperial" />
          <Picker.Item label="Metric" value="metric" />
        </Picker>
      </View>
    );
  }
}

export default UnitPicker;
