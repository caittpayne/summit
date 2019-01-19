import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'center',
       position: 'relative',
       top: -60
    },
     headerText: {
         fontSize: 25,
         fontFamily: '$mainFont',
         textTransform: 'uppercase',
         color: '#707070'
     },
});