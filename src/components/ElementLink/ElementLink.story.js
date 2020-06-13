import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ElementLink from './ElementLink';
import mockContent from './ElementLink.mock';

export default {
  title: 'ElementLink',
  decorators: [withKnobs]
};

export const normal = () => <ElementLink url={text('url', mockContent.url)} text={text('text', mockContent.text)} />;
