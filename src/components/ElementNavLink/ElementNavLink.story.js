import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import ElementNavLink from './ElementNavLink';
import mockContent from './ElementNavLink.mock';

export default {
  title: 'ElementNavLink',
  decorators: [withKnobs]
};

const { mainLink, childrenLinks } = mockContent;

export const normal = () => (
  <ElementNavLink mainLink={object('mainLink', mainLink)} childrenLinks={object('childrenLinks', childrenLinks)} />
);
