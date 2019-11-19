import React from 'react';
import renderer from 'react-test-renderer';

import PasswordStrength from '../components/Register/PasswordStrength';

describe('<PasswordStrength />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<PasswordStrength />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
