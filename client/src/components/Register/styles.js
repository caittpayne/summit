import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       position: 'relative',
    },
     headerText: {
         fontSize: 25,
         fontFamily: '$mainFont',
         textTransform: 'uppercase',
         color: '#707070',
         bottom: 50
     },
});