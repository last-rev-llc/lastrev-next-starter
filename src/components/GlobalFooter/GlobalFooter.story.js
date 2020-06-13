import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import GlobalFooter from './GlobalFooter';
import mockContent from './GlobalFooter.mock';

export default {
  title: 'GlobalFooter',
  decorators: [withKnobs]
};

export const normal = () => <GlobalFooter header={text('header', mockContent.header)} />;
export const anotherVersion = () => <GlobalFooter header={text('header', mockContent.header)} />;
