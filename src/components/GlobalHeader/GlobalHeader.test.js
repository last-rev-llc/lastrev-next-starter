import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GlobalHeader from './GlobalHeader';
import mockContent from './GlobalHeader.mock';

afterEach(() => {
  cleanup();
});

describe('<GlobalHeader />', () => {
  describe('<GlobalHeader /> renders correctly', () => {
    test.todo('Write tests');
  });
});
