import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Alert } from "react-native";
import { Button } from "react-native-elements";
import Input from "./Input";
import styles from "./styles";
import axios from "axios";
import { AsyncStorage } from "react-native";
import url from "../../../environment.js";

class RegisterForm extends Component {
  _handleSubmit = values => {
    const { email, password } = values;
    axios
      .post(`${url}/user/register`, { email, password })
      .then(response => {
        if (response.status == 200) {
          axios
            .post("http://10.0.0.172:3000/user/signIn", { email, password })
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
        }
      })
      .catch(err => {
        Alert.alert("You made an error " + err);
      });
  };
  render() {
    return (
      <View>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Not a valid email")
              .required("Email is required"),
            password: Yup.string()
              .min(6)
              .required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf(
                [Yup.ref("password", null)],
                "Confirm password must match password"
              )
              .required()
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
              <Input
                label="confirm password"
                placeholder="Confirm Password"
                autoCapitalize="none"
                secureTextEntry
                value={values.confirmPassword}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="confirmPassword"
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <Button
                title="Register"
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

export default RegisterForm;
