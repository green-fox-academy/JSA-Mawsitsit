// External Dependencies
import { StyleSheet } from 'react-native';

const RegisterStyle = StyleSheet.create(
  {
    containerStyle: {
      marginTop: 60,
      marginLeft: 20,
      width: '90%',
      backgroundColor: '#fff',
      top: 50,
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
      color: 'white',
      fontSize: 23,
    },
    buttonContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      marginTop: 200,
      height: 60,
      width: 120,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
);

export default RegisterStyle;
