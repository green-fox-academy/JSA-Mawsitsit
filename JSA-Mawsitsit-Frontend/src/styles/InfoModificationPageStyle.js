// External Dependencies
import { StyleSheet } from 'react-native';

const InfoModificationPageStyles = StyleSheet.create({
  doneButtonStyle: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  doneButtonTextStyle: {
    color: 'rgb(41, 146, 244)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modificationTitleStyle: {
    fontSize: 24,
    marginBottom: 12,
  },
  modificationTitleContainerStyle: {
    alignItems: 'center',
    display: 'flex',
    marginHorizontal: 8,
    marginVertical: 16,
  },
  modificationSubtitleStyle: {
    fontSize: 18,
  },
  emailVerificationStyle: {
    borderRadius: 10,
    borderTopColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 30,
  },
});

export default InfoModificationPageStyles;
