// External Dependencies
import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  headerStyle: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerTextStyle: {
    top: 35,
    fontSize: 38,
    fontWeight: '700',
  },
  inputStyle: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInputStyle: {
    backgroundColor: '#fff',
    width: 350,
    borderRadius: 7,
    height: 45,
    borderWidth: 10,
    borderColor: '#000',
  },
  buttonStyle: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  switchStyle: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
  selectStyle: {
    width: 320,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectTextStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  footerStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerFrameStyle: {
    width: 230,
    top: 20,
  },
  footerFrameInsideStyle: {
    width: 230,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerButtonStyle: {
    color: 'white',
    fontStyle: 'italic',
  },
  forgetPasswordButtonStyle: {
    color: 'white',
    fontSize: 15,
  },
  footerBottomStyle: {
    width: 200,
    alignItems: 'center',
    bottom: 30,
  },
});

export default LoginStyle;
