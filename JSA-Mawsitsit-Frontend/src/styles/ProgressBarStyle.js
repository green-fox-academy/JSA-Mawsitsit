// External Dependencies
import { StyleSheet } from 'react-native';

const ProgressBarStyles = StyleSheet.create({
  rootStyle: {
    alignItems: 'center',
    display: 'flex',
    // margin: 16,
  },
  barContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  completenessBarStyle: {
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: 'rgba(54, 150, 243, 0.8)',
    height: 32,
  },
  completeTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
    marginTop: -24,
  },
  inCompletenessBarStyle: {
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'rgba(54, 150, 243, 0.2)',
    height: 32,
  },
});

export default ProgressBarStyles;
