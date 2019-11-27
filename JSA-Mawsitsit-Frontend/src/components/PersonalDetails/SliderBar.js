// External Dependencies
import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Tab,
  Tabs,
} from 'native-base';

// Internal Dependencies
import PersonalDetailsStyle from '../../styles/PersonalDetailsStyle';
// import PersonalDetails from './PersonalDetails';

const { tabUnderlineStyle, tabTextStyle } = PersonalDetailsStyle;

const TabsExample = () => (
  <Container>
    <Tabs tabBarUnderlineStyle={tabUnderlineStyle}>
      <Tab activeTextStyle={tabTextStyle} textStyle={tabTextStyle} heading="PERSONAL">
        <Text>Welcome to Personal Details page~</Text>
      </Tab>
      <Tab activeTextStyle={tabTextStyle} textStyle={tabTextStyle} heading="SECURITY" />
      <Tab activeTextStyle={tabTextStyle} textStyle={tabTextStyle} heading="FINANCIAL" />
    </Tabs>
  </Container>
);

export default TabsExample;
