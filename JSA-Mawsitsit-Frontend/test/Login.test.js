import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../src/screens/LoginScreen';

describe('<Register />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
