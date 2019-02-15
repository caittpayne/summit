import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import AppStack from "./config/Router.js";


EStyleSheet.build({
  $primaryWhite: "#FFFFFF",
  $mainFont: "HelveticaNeue-Medium"
});

export default () => <AppStack />;
