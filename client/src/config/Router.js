import { createStackNavigator, createAppContainer } from "react-navigation";

import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import Home from "../screens/Home";

const AppStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null
      }
    },
    Register: Register,
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "SignIn"
  }
);

export default createAppContainer(AppStack);
