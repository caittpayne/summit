import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Alert } from "react-native";
import { Button } from "react-native-elements";
import Input from "./Input";
import styles from "./styles";
import axios from "axios";
import { AsyncStorage } from "react-native";
import url from "../../../environment.js";

class SignInForm extends React.Component {
  _handleSubmit = values => {
    const { email, password } = values;
    axios
      .post(`${url}/user/signIn`, { email, password })
      .then(response => {
        if (response.status == 200) {
          try {
            const token = response.headers["x-auth"];
            if (token) {
              AsyncStorage.setItem("x-auth", token)
                .then(() => {
                  this.props.navigation.navigate("Home");
                })
                .catch(err => {
                  Alert.alert("An error has happened" + err);
                });
            }
          } catch (err) {
            Alert.alert("Error" + err);
          }
        }
      })
      .catch(err => {
        Alert.alert("Wrong email or password " + err);
      });
  };
  render() {
    return (
      <View>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Not a valid email")
              .required("Email is required"),
            password: Yup.string()
              .min(6)
              .required("Password is required")
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
                label="email"
                placeholder="email"
                autoCapitalize="none"
                value={values.email}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="email"
                onTouch={setFieldTouched}
                error={touched.email && errors.email}
              />
              <Input
                label="password"
                placeholder="password"
                autoCapitalize="none"
                secureTextEntry
                value={values.password}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="password"
                error={touched.password && errors.password}
              />
              <Button
                title="Sign In"
                onPress={handleSubmit}
                buttonStyle={styles.button}
              />
            </React.Fragment>
          )}
        />
      </View>
    );
  }
}

export default SignInForm;
