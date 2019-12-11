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
    fontSize: 40,
    fontWeight: '700',
    color: '#FFF',
  },
  inputStyle: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
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
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  selectStyle: {
    width: 320,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectTextStyle: {
    color: '#FFF',
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
  variantPswStyle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginStyle;
