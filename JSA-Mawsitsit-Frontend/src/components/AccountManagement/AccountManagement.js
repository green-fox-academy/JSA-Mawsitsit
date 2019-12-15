// External Dependencies
import React from 'react';
import {
  Container,
  Tab,
  Tabs,
} from 'native-base';

// Internal Dependencies
import AccountManagementStyle from './styles/AccountManagementStyle';
import Personal from './Personal/Personal';
import Secure from './Secure/Secure';

// Local Variables
const {
  tabTextStyle,
  tabUnderlineStyle,
} = AccountManagementStyle;

const AccountManagement = () => (
  <Container>
    <Tabs tabBarUnderlineStyle={tabUnderlineStyle}>
      <Tab
        activeTextStyle={tabTextStyle}
        textStyle={tabTextStyle}
        heading="PERSONAL"
      >
        <Personal />
      </Tab>
      <Tab
        activeTextStyle={tabTextStyle}
        textStyle={tabTextStyle}
        heading="SECURITY"
      >
        <Secure />
      </Tab>
      <Tab activeTextStyle={tabTextStyle} textStyle={tabTextStyle} heading="FINANCIAL" />
    </Tabs>
  </Container>
);

export default AccountManagement;
