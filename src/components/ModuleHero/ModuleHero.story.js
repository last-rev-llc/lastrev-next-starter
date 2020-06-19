import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ModuleHero from './ModuleHero';
import mockContent from './ModuleHero.mock';

export default {
  title: 'ModuleHero',
  decorators: [withKnobs]
};

export const normal = () => <ModuleHero header={text('header', mockContent.header)} cta={text('cta', mockContent.cta)} />;
export const anotherVersion = () => <ModuleHero header={text('header', mockContent.header)} summary={text('summary', mockContent.summary)} cta={text('cta', mockContent.cta)} />;
