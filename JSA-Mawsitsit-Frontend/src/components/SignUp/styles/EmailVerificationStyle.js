// External Dependencies
import { StyleSheet } from 'react-native';

const emailVerificationStyles = StyleSheet.create({
  rootStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  emailVerificationTitleStyle: {
    color: 'white',
    fontSize: 42,
    marginBottom: 8,
  },
  emailVerificationSubtitleStyle: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 8,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 25,
    marginBottom: 64,
    marginHorizontal: 16,
    opacity: 0.7,
  },
  titleContainerStyle: {
    marginBottom: 48,
    marginHorizontal: 16,
  },
  verifyButtonStyle: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    width: 200,
  },
  verifyButtonTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3696F3',
  },
});

export default emailVerificationStyles;
