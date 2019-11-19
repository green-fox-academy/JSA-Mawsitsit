import React from 'react';
import renderer from 'react-test-renderer';

import Register from '../components/Register/Register';

describe('<Register />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree.children.length).toBe(13);
  });
});
