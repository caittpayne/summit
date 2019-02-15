import React, { Component } from "react";
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import url from "../../environment.js";
import Form from "./Form/Form";
import axios from "axios";

class Home extends Component {
  state = {
    modalVisible: false
  };

  componentDidMount() {
    AsyncStorage.getItem("x-auth")
      .then(token => {
        axios
          .get(`${url}/user/getUser`, { headers: { "x-auth": token } })
          .then(response => {
            if ((response.status == 200 || 304) && !response.data.altitude) {
              this.setModalVisible(true);
            }
          })
          .catch(err => {
            this.setModalVisible(false);
          });
      })
      .catch(err => {
        this.setModalVisible(false);
      });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this._handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <View style={styles.closeView}>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <View>
                    <Icon
                      type="font-awesome"
                      name="times"
                      color="#707070"
                      size={25}
                    />
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.formView}>
                <Text style={styles.headerText}>Welcome to Summit!</Text>
                <Text style={styles.text}>
                  Before getting started, save your alitude to your profile
                </Text>
                <Form />
              </View>
            </View>
          </View>
        </Modal>

        <Button title="Convert Recipe" buttonStyle={styles.button} />
        <Button title="My Recipe Book" buttonStyle={styles.button} />
      </View>
    );
  }
}

export default Home;
