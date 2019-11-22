// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Switch,
  StyleSheet,
  View,
} from 'react-native';

// Internal Dependencies
import loginStyles from '../Login/Styles';

// Local Variables
const styles = StyleSheet.create(loginStyles);

const Select = (props) => {
  const { selectItem } = props;
  return (
    <View style={styles.selectStyle}>
      <Text style={styles.selectText}>{selectItem}</Text>
      <Switch
        // thumbColor={[status? '#c1d045':'#fff')]}
        thumbColor="#c1d045"
        value
        trackColor={{ true: '#90caf9', false: '#fff' }}
        ios_backgroundColor="#fff"
      />
    </View>
  );
};

Select.propTypes = {
  selectItem: PropTypes.string.isRequired,
};

export default Select;
