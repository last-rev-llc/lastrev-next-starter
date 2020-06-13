import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Layout from './Layout';
import mockContent from './Layout.mock';

export default {
  title: 'Layout',
  decorators: [withKnobs]
};

export const normal = () => <Layout header={text('header', mockContent.header)} />;
export const anotherVersion = () => <Layout header={text('header', mockContent.header)} />;
