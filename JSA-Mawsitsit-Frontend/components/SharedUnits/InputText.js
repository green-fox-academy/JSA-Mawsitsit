// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import { Item, Input } from 'native-base';

// Internal Dependencies
import styles from '../Login/Styles';

// Component Definition
const InputText = (props) => {
  const { placeholder } = props;
  return (
    <View>
      <Item regular style={styles.textInputStyle}>
        <Input placeholder={placeholder} />
      </Item>
    </View>
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputText;
