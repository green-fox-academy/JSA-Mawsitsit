// External Dependencies
import { StyleSheet } from 'react-native';

const FirstStyle = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  headerStyle: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextStyle: {
    top: 45,
    fontSize: 68,
    color: '#FFF',
    fontWeight: '700',
  },
  buttonStyle: {
    width: 220,
    height: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  btnTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1269e5',
  },
  footerStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerFrameStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    top: 20,
  },
  footerFrameInsideStyle: {
    display: 'flex',
    width: 220,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  linkTextStyle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  variantClickStyle: {
    fontStyle: 'italic',
  },
  footerBottomStyle: {
    width: 200,
    alignItems: 'center',
    bottom: 30,
  },
});

export default FirstStyle;
