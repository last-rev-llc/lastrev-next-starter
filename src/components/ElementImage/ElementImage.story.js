import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ElementImage from './ElementImage';
import mockContent from './ElementImage.mock';

const { url, altText } = mockContent;

export default {
  title: 'ElementImage',
  decorators: [withKnobs]
};

export const normal = () => <ElementImage url={text('url', url)} altText={text('header', altText)} />;
