import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SectionSplitColumn from './SectionSplitColumn';
import mockContent from './SectionSplitColumn.mock';

afterEach(() => {
  cleanup();
});

describe('<SectionSplitColumn />', () => {
  describe('<SectionSplitColumn /> renders correctly', () => {
    test.todo('Write tests');
  });
});
