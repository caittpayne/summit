import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Header = () => (
  <View style={styles.container}>
    <View>
      <Image
        source={require("../images/header-image.jpg")}
        style={styles.main}
      />
    </View>
    <View>
      <Image source={require("../images/logo.png")} style={styles.logo} />
    </View>
  </View>
);

export default Header;
