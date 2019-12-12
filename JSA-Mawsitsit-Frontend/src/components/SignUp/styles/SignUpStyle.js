// External Dependencies
import { StyleSheet } from 'react-native';

const RegisterStyle = StyleSheet.create(
  {
    rootStyle: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-around',
    },
    logoStyle: {
      color: 'white',
      fontFamily: 'LakkiReddy',
      fontSize: 96,
    },
    signUpButtonStyle: {
      backgroundColor: 'white',
      height: 50,
      justifyContent: 'center',
      width: 200,
    },
    signUpButtonTextStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3696F3',
    },
    buttonContainerStyle: {
      top: 150,
      alignItems: 'center',
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
    variantLinkButtonStyle: {
      fontSize: 15,
      top: 20,
    },
  },
);

export default RegisterStyle;
