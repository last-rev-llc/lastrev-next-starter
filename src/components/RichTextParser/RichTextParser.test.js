import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RichTextParser from './RichTextParser';
import mockContent from './RichTextParser.mock';

afterEach(() => {
  cleanup();
});

describe('<RichTextParser />', () => {
  describe('<RichTextParser /> renders correctly', () => {
    test.todo('Write tests');
  });
});
