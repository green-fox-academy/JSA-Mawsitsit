// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Switch,
  View,
} from 'react-native';

// Internal Dependencies
import LoginStyle from '../../styles/LoginStyle';

// Local Variables
const {
  selectStyle,
  selectTextStyle,
} = LoginStyle;


const Select = (props) => {
  const { selectItem } = props;
  return (
    <View style={selectStyle}>
      <Text style={selectTextStyle}>{selectItem}</Text>
      <Switch
        // thumbColor={[status? '#c1d045':'#fff')]}
        // thumb color will change by the switch status
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
