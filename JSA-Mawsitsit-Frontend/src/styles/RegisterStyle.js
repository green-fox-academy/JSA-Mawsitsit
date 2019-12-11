// External Dependencies
import { StyleSheet } from 'react-native';

const RegisterStyle = StyleSheet.create(
  {
    rootStyle: {
      flex: 1,
    },
    containerStyle: {
      marginTop: 100,
      marginLeft: 20,
      height: 350,
      width: '90%',
    },
    // password strength
    passwordStrengthStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    barStyle: {
      marginTop: 10,
      height: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    baseBarStyle: {
      backgroundColor: '#48BBEC',
    },
    weakBarStyle: {
      width: 60,
      backgroundColor: 'red',
    },
    mediumBarStyle: {
      width: 120,
      backgroundColor: 'orange',
    },
    strongBarStyle: {
      width: 180,
      backgroundColor: 'green',
    },
    textStyle: {
      marginTop: 10,
      fontSize: 14,
    },
    warningTextColor: {
      color: 'red',
    },
    textInputStyle: {
      marginTop: 10,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#b9c6c3',
    },
    warningBorderColor: {
      borderBottomColor: 'red',
    },
    buttonTextStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#FFF',
    },
    buttonContainerStyle: {
      top: 150,
      alignItems: 'center',
    },
    buttonStyle: {
      width: 300,
      height: 50,
      backgroundColor: '#1269e5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variantLinkButtonStyle: {
      fontSize: 18,
      color: '#FFF',
      top: 20,
    },
  },
);

export default RegisterStyle;
