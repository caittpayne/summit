import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    facebookButton: {
        backgroundColor: '#376BC8',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 30,
        paddingLeft: 30,
        marginRight: 10
    },
    googleButton: {
        backgroundColor: '#E34737',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 30,
        paddingLeft: 30
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: '$mainFont',
        textTransform: 'uppercase'
    },
    text: {     
        fontFamily: '$mainFont',
        textTransform: 'uppercase',
        color: '#707070',
      },
    textContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        top: -9,
        backgroundColor: '#fff'
    }
});


