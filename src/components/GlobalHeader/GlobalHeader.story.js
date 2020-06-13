import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import GlobalHeader from './GlobalHeader';
import mockContent from './GlobalHeader.mock';

export default {
  title: 'GlobalHeader',
  decorators: [withKnobs]
};

export const normal = () => <GlobalHeader header={text('header', mockContent.header)} />;
export const anotherVersion = () => <GlobalHeader header={text('header', mockContent.header)} />;
