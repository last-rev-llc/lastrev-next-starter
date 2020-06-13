import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ModuleRichText from './ModuleRichText';
import mockContent from './ModuleRichText.mock';

export default {
  title: 'ModuleRichText',
  decorators: [withKnobs]
};

export const normal = () => <ModuleRichText header={text('header', mockContent.header)} />;
export const anotherVersion = () => <ModuleRichText header={text('header', mockContent.header)} />;
