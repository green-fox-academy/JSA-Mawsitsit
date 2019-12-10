// External Dependencies
import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  headerStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextStyle: {
    top: 35,
    fontSize: 38,
    fontWeight: '700',
    color: '#FFF',
  },
  inputStyle: {
    flex: 5,
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
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1269e5',
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerFrameStyle: {
    width: 260,
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkTextStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  variantClickStyle: {
    fontStyle: 'italic',
  },
  variantPswStyle: {
    color: '#fff',
    fontSize: 15,
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
