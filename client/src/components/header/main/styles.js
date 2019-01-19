import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
   main: {
       alignSelf: 'center',
       resizeMode: 'contain',
       height: 200,
       position: 'relative'
   },
   logo: {
        borderRadius: 75,
        alignSelf: 'center',
        top: -50,
        resizeMode: 'contain',
        height: 150,
        width: 150
      
   },
   container: {
       position: 'relative',
       left: 0,
       right: 0,
       top: 0
   }
});