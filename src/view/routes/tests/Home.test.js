import React from 'react';
import { render } from '@testing-library/react';

import { Home } from '..';

describe('<Home />', () => {
  it('renders', () => {
    const { queryByTestId } = render(<Home />);
    expect(queryByTestId('hp-wrapper')).not.toBeNull();
  });
});
