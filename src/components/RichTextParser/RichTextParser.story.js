import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import RichTextParser from './RichTextParser';
import mockContent from './RichTextParser.mock';

export default {
  title: 'RichTextParser',
  decorators: [withKnobs]
};

export const normal = () => <RichTextParser header={text('header', mockContent.header)} />;
export const anotherVersion = () => <RichTextParser header={text('header', mockContent.header)} />;
