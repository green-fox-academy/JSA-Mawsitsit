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
  switchStyle,
  selectStyle,
  selectTextStyle,
} = LoginStyle;


const Select = (props) => {
  const { selectItem, onChangeSelect, selectValue } = props;
  return (
    <View style={selectStyle}>
      <Text style={selectTextStyle}>{selectItem}</Text>
      <Switch
        style={switchStyle}
        thumbColor={[(selectValue ? '#c1d045' : '#fff')]}
        trackColor={{ true: '#90caf9', false: '#fff' }}
        ios_backgroundColor="#fff"
        value={selectValue}
        onValueChange={onChangeSelect}
      />
    </View>
  );
};

Select.propTypes = {
  selectItem: PropTypes.string.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  selectValue: PropTypes.bool.isRequired,
};

export default Select;
