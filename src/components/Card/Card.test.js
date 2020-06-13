import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';
import mockContent from './Card.mock';

afterEach(() => {
  cleanup();
});

describe('<Card />', () => {
  describe('<Card /> renders correctly', () => {
    test.todo('Write tests');
  });
});
