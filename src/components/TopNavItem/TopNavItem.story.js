import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import TopNavItem from './TopNavItem';
import mockContent from './TopNavItem.mock';

const { _id, _contentTypeId, subnavCards, title } = mockContent;

export default {
  title: 'TopNavItem',
  decorators: [withKnobs]
};

export const normal = () => (
  <TopNavItem
    _id={_id}
    _contentTypeId={_contentTypeId}
    subnavCards={object('subnavCards', subnavCards)}
    title={object('title', title)}
  />
);
