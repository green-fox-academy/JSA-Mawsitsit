// External Dependencies
import { StyleSheet } from 'react-native';

const IconInputStyles = StyleSheet.create({
  buttonContainerStyle: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 24,
  },
  progressContainerStyle: {
    margin: 16,
  },
  progressTitleStyle: {
    fontSize: 18,
    marginBottom: 12,
  },
  saveButtonStyle: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    marginTop: 16,
    shadowColor: 'grey',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.8,
    width: 150,
  },
  saveButtonTextStyle: {
    color: 'rgb(54, 150, 243)',
    fontSize: 24,
  },
  variantLinkButtonStyle: {
    color: 'rgb(54, 150, 243)',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: -15,
  },
  verifyTextStyle: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '400',
  },
});

export default IconInputStyles;
