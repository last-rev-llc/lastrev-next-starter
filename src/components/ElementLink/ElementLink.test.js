import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ElementLink from './ElementLink';
import mockContent from './ElementLink.mock';

afterEach(() => {
  cleanup();
});

describe('<ElementLink />', () => {
  describe('<ElementLink /> renders correctly', () => {
    test.todo('Write tests');
  });
});
