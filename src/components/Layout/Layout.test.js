import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Layout from './Layout';
import mockContent from './Layout.mock';

afterEach(() => {
  cleanup();
});

describe('<Layout />', () => {
  describe('<Layout /> renders correctly', () => {
    test.todo('Write tests');

  });
});
