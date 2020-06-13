import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PageGeneral from './PageGeneral';
import mockContent from './PageGeneral.mock';

afterEach(() => {
  cleanup();
});

describe('<PageGeneral />', () => {
  describe('<PageGeneral /> renders correctly', () => {
    test.todo('Write tests');

  });
});
