import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ContentModule from './ContentModule';
import mockContent from './ContentModule.mock';

export default {
  title: 'ContentModule',
  decorators: [withKnobs]
};

export const normal = () => <ContentModule header={text('header', mockContent.header)} />;
export const anotherVersion = () => <ContentModule header={text('header', mockContent.header)} />;
