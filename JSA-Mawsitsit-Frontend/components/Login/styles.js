// External Dependencies
import { StyleSheet } from 'react-native';

const loginStyles = {
  rootStyle: {
    flex: 1,
  },
  header: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 38,
    fontWeight: '700',
  },
  input: {
    flex: 3,
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
  button: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  selectStyle: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerFrame: {
    width: 230,
    top: 20,
  },
  footerFrameInside: {
    width: 230,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#fff',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  variantClick: {
    fontStyle: 'italic',
  },
  variantPSW: {
    fontSize: 15,
  },
  footerBottom: {
    width: 200,
    alignItems: 'center',
    bottom: 30,
  },

};

const styles = StyleSheet.create(loginStyles);

export default styles;
