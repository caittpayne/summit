import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'flex-start',
       alignItems: 'stretch',
       width: '70%'
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
     button: {
        backgroundColor: 'black',
        textTransform: 'uppercase',
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30
        
     },
});



