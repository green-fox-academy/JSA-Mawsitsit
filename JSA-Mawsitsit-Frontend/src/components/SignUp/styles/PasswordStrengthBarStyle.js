// External Dependencies
import { StyleSheet } from 'react-native';

const PasswordStrengthBarStyles = StyleSheet.create({
  rootStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 16,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 4,
  },
  barContainerStyle: {
    flexDirection: 'row',
    height: 6,
  },
  greatBarStyle: {
    backgroundColor: 'green',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    width: '28%',
  },
  mediumBarStyle: {
    backgroundColor: 'orange',
    width: '28%',
  },
  strengthTextStyle: {
    fontFamily: 'Roboto',
  },
  weakBarStyle: {
    backgroundColor: 'red',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    width: '28%',
  },
});

export default PasswordStrengthBarStyles;
