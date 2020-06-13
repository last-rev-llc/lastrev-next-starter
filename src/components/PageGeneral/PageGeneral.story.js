import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PageGeneral from './PageGeneral';
import mockContent from './PageGeneral.mock';

export default {
  title: 'PageGeneral',
  decorators: [withKnobs]
};

export const normal = () => <PageGeneral header={text('header', mockContent.header)} />;
export const anotherVersion = () => <PageGeneral header={text('header', mockContent.header)} />;
