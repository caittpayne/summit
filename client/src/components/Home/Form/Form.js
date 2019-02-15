import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Alert, Text } from "react-native";
import { Button } from "react-native-elements";
import Input from "./Input";
import UnitPicker from "./Picker";
import styles from "./styles";
import axios from "axios";
import url from "../../../environment.js";
import { AsyncStorage } from "react-native";

class AltitudeForm extends Component {
  state = {
    picker: "",
    success: ""
  };

  _onUnitChange = itemIndex => {
    this.setState({ picker: itemIndex });
  };

  _handleSubmit = values => {
    const { altitude, unit } = values;

    AsyncStorage.getItem("x-auth")
      .then(token => {
        axios
          .post(
            `${url}/user/addAltitude`,
            { altitude, unit },
            {
              headers: {
                "x-auth": token
              }
            }
          )
          .then(response => {
            if (response.status == 200) {
              console.log("success");
              this.setState({ success: "Saved!" });
            }
          })
          .catch(err => {
            Alert.alert("There is an error " + err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <View>
        <Formik
          initialValues={{ altitude: "", unit: "imperial" }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            altitude: Yup.number().required("Altitude is required"),
            unit: Yup.string().required("Unit of measurement is required")
          })}
          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched
          }) => (
            <React.Fragment>
              <Input
                label="altitude"
                placeholder="altitude"
                value={values.altitude}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="altitude"
                onTouch={setFieldTouched}
                error={touched.altitude && errors.altitude}
              />
              <UnitPicker
                name="unit"
                onValueChange={value => {
                  setFieldValue("unit", value);
                  this._onUnitChange(value);
                }}
                selectedValue={this.state.picker}
                value={values.unit}
              />
              <Button
                title="Save"
                buttonStyle={styles.button}
                onPress={handleSubmit}
              />
            </React.Fragment>
          )}
        />
        <Text>{this.state.success}</Text>
      </View>
    );
  }
}

export default AltitudeForm;
