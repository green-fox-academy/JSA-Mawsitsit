// External Dependencies
import { StyleSheet } from 'react-native';

const IconInputStyles = StyleSheet.create({
  rootStyle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
  },
  buttonContainerStyle: {
    alignItems: 'center',
    display: 'flex',
  },
  progressContainerStyle: {
    margin: 16,
  },
  progressTitleStyle: {
    fontSize: 18,
    marginBottom: 12,
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
