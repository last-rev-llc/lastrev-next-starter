import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import ElementLink from './ElementLink';
import { internalUrl, externalUrl, anchorTag } from './ElementLink.mock';

export default {
  title: 'ElementLink',
  decorators: [withKnobs]
};

const actionChoices = ['Go to Internal URL', 'Go to External URL', 'Anchor Tag'];

const iconChoices = ['None', 'Profile', 'Map Marker', 'Phone'];

export const internalUrlLink = () => (
  <ElementLink
    action={select('action', actionChoices, internalUrl.action)}
    internalUrl={internalUrl.internalUrl}
    linkText={text('linkText', internalUrl.linkText)}
    icon={select('icon', iconChoices, internalUrl.icon)}
  />
);
export const externalUrlLink = () => (
  <ElementLink
    action={select('action', actionChoices, externalUrl.action)}
    externalUrl={text('externalUrl', externalUrl.externalUrl)}
    linkText={text('linkText', externalUrl.linkText)}
    icon={select('icon', iconChoices, externalUrl.icon)}
  />
);
export const anchorTagLink = () => (
  <ElementLink
    action={select('action', actionChoices, anchorTag.action)}
    anchorTagName={text('anchorTagName', anchorTag.anchorTagName)}
    linkText={text('linkText', anchorTag.linkText)}
    icon={select('icon', iconChoices, anchorTag.icon)}
  />
);
