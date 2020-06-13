import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GlobalFooter from './GlobalFooter';
import mockContent from './GlobalFooter.mock';

afterEach(() => {
  cleanup();
});

describe('<GlobalFooter />', () => {
  describe('<GlobalFooter /> renders correctly', () => {
    test.todo('Write tests');
  });
});
