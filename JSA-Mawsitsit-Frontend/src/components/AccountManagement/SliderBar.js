// External Dependencies
import React from 'react';
import {
  Container,
  Tab,
  Tabs,
} from 'native-base';

// Internal Dependencies
import PersonalDetailsStyle from '../../styles/PersonalDetailsStyle';
import Personal from './Personal';

const { tabUnderlineStyle, tabTextStyle } = PersonalDetailsStyle;

const SliderBar = () => (
  <Container>
    <Tabs tabBarUnderlineStyle={tabUnderlineStyle}>
      <Tab activeTextStyle={tabTextStyle} textStyle={tabTextStyle} heading="PERSONAL">
        <Personal />
      </Tab>
      <Tab activeTextStyle={tabTextStyle} textStyle={tabTextStyle} heading="SECURITY" />
      <Tab activeTextStyle={tabTextStyle} textStyle={tabTextStyle} heading="FINANCIAL" />
    </Tabs>
  </Container>
);

export default SliderBar;
