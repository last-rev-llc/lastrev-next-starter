import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ModuleHero from './ModuleHero';
import mockContent from './ModuleHero.mock';

afterEach(() => {
  cleanup();
});

describe('<ModuleHero />', () => {
  describe('<ModuleHero /> renders correctly', () => {
    test.todo('Write tests');

  });
});
