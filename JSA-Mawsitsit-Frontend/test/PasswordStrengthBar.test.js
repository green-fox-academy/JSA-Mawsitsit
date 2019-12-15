import React from 'react';
import renderer from 'react-test-renderer';

import PasswordStrength from '../src/components/SignUp/PasswordStrengthBar';

describe('<PasswordStrength />', () => {
  it('has 2 childs', () => {
    const tree = renderer.create(<PasswordStrength passwordMessage="Medium password" />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
