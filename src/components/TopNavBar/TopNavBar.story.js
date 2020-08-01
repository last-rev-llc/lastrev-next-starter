import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import TopNavBar from './TopNavBar';
import mockContent from './TopNavBar.mock';

const { _id, _contentTypeId, logoUrl, logo, topNavItems, style } = mockContent;

export default {
  title: 'TopNavBar',
  decorators: [withKnobs]
};

export const normal = () => (
  <TopNavBar
    _id={_id}
    _contentTypeId={_contentTypeId}
    logoUrl={text('logoUrl', logoUrl)}
    logo={object('logo', logo)}
    topNavItems={object('topNavItems', topNavItems)}
    style={text('style', style)}
  />
);
