import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ElementImage from './ElementImage';
import mockContent from './ElementImage.mock';

afterEach(() => {
  cleanup();
});

describe('<ElementImage />', () => {
  describe('<ElementImage /> renders correctly', () => {
    test.todo('Write tests');
  });
});
