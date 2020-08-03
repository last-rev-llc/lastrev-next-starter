import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import SubnavCard from './SubnavCard';
import mockContent from './SubnavCard.mock';

const { _id, _contentTypeId, primaryLink, introText, secondaryLinks, subNavCardStyle } = mockContent;

export default {
  title: 'SubnavCard',
  decorators: [withKnobs]
};

export const normal = () => (
  <SubnavCard
    _id={_id}
    _contentTypeId={_contentTypeId}
    primaryLink={object('primaryLink', primaryLink)}
    introText={text('introText', introText)}
    secondaryLinks={object('secondaryLinks', secondaryLinks)}
    subNavCardStyle={text('subNavCardStyle', subNavCardStyle)}
  />
);
