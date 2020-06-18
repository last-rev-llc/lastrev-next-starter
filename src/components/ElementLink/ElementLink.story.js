import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import ElementLink from './ElementLink';
import { internalUrl, externalUrl, anchorTag } from './ElementLink.mock';

export default {
  title: 'ElementLink',
  decorators: [withKnobs]
};

const actionChoices = ['Go to Internal URL', 'Go to External URL', 'Anchor Tag'];

const linkTypeChoices = [
  'Text Link',
  'Solid Button',
  'Outlined Button',
  'Light Solid Button',
  'Light Outlined Button',
  'Dark Solid Button',
  'Dark Outlined Button'
];

const iconChoices = ['None', 'Profile', 'Map Marker', 'Phone'];

export const internalUrlLink = () => (
  <ElementLink
    action={select('action', actionChoices, internalUrl.action)}
    internalUrl={internalUrl.internalUrl}
    linkText={text('linkText', internalUrl.linkText)}
    linkType={select('linkType', linkTypeChoices, internalUrl.linkType)}
    icon={select('icon', iconChoices, internalUrl.icon)}
  />
);
export const externalUrlLink = () => (
  <ElementLink
    action={select('action', actionChoices, externalUrl.action)}
    externalUrl={text('externalUrl', externalUrl.externalUrl)}
    linkText={text('linkText', externalUrl.linkText)}
    linkType={select('linkType', linkTypeChoices, externalUrl.linkType)}
    icon={select('icon', iconChoices, externalUrl.icon)}
  />
);
export const anchorTagLink = () => (
  <ElementLink
    action={select('action', actionChoices, anchorTag.action)}
    anchorTagName={text('anchorTagName', anchorTag.anchorTagName)}
    linkText={text('linkText', anchorTag.linkText)}
    linkType={select('linkType', linkTypeChoices, anchorTag.linkType)}
    icon={select('icon', iconChoices, anchorTag.icon)}
  />
);
