import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { View, Alert } from "react-native";
import { Button } from "react-native-elements";
import Input from "./Input";
import styles from "./styles";

class RegisterForm extends React.Component {
  _handleSubmit = values => {
    Alert.alert('Will register with the following:' + ' ' + JSON.stringify(values));
  };
  render() {
    return (
      <View>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: ""}}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
              email: Yup
                .string()
                .email('Not a valid email')
                .required('Email is required'),
            password: Yup
                .string()
                .min(6)
                .required('Password is required'),
            confirmPassword: Yup
                .string()
                .oneOf([Yup.ref('password', null)], 'Confirm password must match password')
                .required()

          })}
          render={( {values, handleSubmit, setFieldValue, errors, touched, setFieldTouched}) => (
            <React.Fragment>
              <Input 
                label="email" 
                placeholder="email" 
                autoCapitalize="none" 
                value={values.email}  
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name='email'
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
                name='password'
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
                name='confirmPassword'
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <Button title="Register" onPress={handleSubmit} buttonStyle={styles.button}/>
            </React.Fragment>
          )}
        />
      </View>
    );
  }
}

export default RegisterForm;
