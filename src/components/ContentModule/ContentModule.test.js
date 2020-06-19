import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ContentModule from './ContentModule';
import mockContent from './ContentModule.mock';

afterEach(() => {
  cleanup();
});

describe('<ContentModule />', () => {
  describe('<ContentModule /> renders correctly', () => {
    test('Header is displayed correctly', () => {
      const { header } = mockContent;
      const { getByTestId } = render(<ContentModule header={header} />);
      expect(getByTestId('ContentModule-header').textContent).toBe(header);
    });
  });
});
