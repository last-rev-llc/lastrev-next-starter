import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SectionSplitColumn from './SectionSplitColumn';
import mockContent from './SectionSplitColumn.mock';

export default {
  title: 'SectionSplitColumn',
  decorators: [withKnobs]
};

export const normal = () => <SectionSplitColumn header={text('header', mockContent.header)} />;
export const anotherVersion = () => <SectionSplitColumn header={text('header', mockContent.header)} />;
