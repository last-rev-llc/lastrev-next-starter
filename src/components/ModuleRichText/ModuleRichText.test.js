import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ModuleRichText from './ModuleRichText';
import mockContent from './ModuleRichText.mock';

afterEach(() => {
  cleanup();
});

describe('<ModuleRichText />', () => {
  describe('<ModuleRichText /> renders correctly', () => {
    test.todo('Write tests');

  });
});
