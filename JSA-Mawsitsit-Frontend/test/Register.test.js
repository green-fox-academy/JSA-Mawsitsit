import React from 'react';
import renderer from 'react-test-renderer';

import RegisterScreen from '../src/screens/RegisterScreen';

describe('<Register />', () => {
  it('has 1 childs', () => {
    const tree = renderer.create(<RegisterScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
