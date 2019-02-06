import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from '../screens/Home';
import Register from '../screens/Register';
  

const AppStack = createStackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    Register: Register
  }, 
  {
      initialRouteName: 'SignIn'
  }
  );


export default createAppContainer(AppStack);