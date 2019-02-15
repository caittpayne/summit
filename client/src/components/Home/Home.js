import React, { Component } from "react";
import { View, Modal, Text, TouchableHighlight } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";
import Form from './Form/Form';
import { AsyncStorage } from 'react-native';

class Home extends Component {

        state = {
            modalVisible: false
          };
 
  componentDidMount() {
    
    // make axios request to get user and check if there's an alitude save. If yes, set to true. If no, set to false.

    
    this.setModalVisible(true);
  } 

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
              <Text>Welcome to Summit!</Text>
              <Text>Before getting started, save your alitude to your profile</Text>
              <Form />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Close</Text>
              </TouchableHighlight>
          </View>
        </Modal>

        <Button title="Convert Recipe" buttonStyle={styles.button} />
        <Button title="My Recipe Book" buttonStyle={styles.button} />
      </View>
    );
  }
}

export default Home;
