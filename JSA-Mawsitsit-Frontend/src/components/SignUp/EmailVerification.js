// External Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Internal Dependencies
import {
  View,
  Text,
} from 'react-native';
import IconInput from '../SharedUnits/IconInput';
import VerificationStyle from '../../styles/VerificationStyle';
import Footer from '../VerificationPage/Footer';

// Local Variables
const {
  verificationInputStyle,
  verificationTextStyle,
} = VerificationStyle;

const initIsCodeRight = true;

const VerificationScreen = (props) => {
  const { navigation } = props;

  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeRight, setIsCodeRight] = useState(initIsCodeRight);

  const handleVerify = async (object) => {
    const res = await fetch('http://localhost:3001/verificationCode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    });
    const isCodeVerified = await res.json();
    return isCodeVerified;
  };

  const handlePress = async () => {
    const inputCode = { code: verificationCode };
    const isCodeVerified = await handleVerify(inputCode);
    if (isCodeVerified.verified) {
      navigation.navigate('DrawerNavigation');
    } else {
      setIsCodeRight(false);
    }
  };
  return (
    <View>
      <View style={verificationInputStyle}>
        <Text style={verificationTextStyle}>Please input verification code</Text>
        <IconInput
          icon="code-tags"
          autoCapitalize="none"
          onChange={(value) => setVerificationCode(value)}
          value={verificationCode}
        />
        <Footer onPress={handlePress} navigation={navigation} />
        {isCodeRight ? <Text /> : <Text>Error code!</Text>}
      </View>
    </View>
  );
};


// Navigation Configuration
VerificationScreen.navigationOptions = {
  headerShown: false,
};
VerificationScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
VerificationScreen.defaultProps = {
  navigation: {},
};

export default VerificationScreen;
