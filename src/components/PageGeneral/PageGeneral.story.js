import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import PageGeneral from './PageGeneral';
import mockContent from './PageGeneral.mock';

export default {
  title: 'PageGeneral',
  decorators: [withKnobs]
};

export const withPageTitle = () => (
  <PageGeneral pageTitle={text('pageTitle', mockContent.pageTitle)} modules={object('modules', mockContent.modules)} />
);
export const withPageHero = () => (
  <PageGeneral
    pageTitle={text('pageTitle', mockContent.pageTitle)}
    pageHero={mockContent.pageHero}
    modules={object('modules', mockContent.modules)}
  />
);
