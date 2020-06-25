import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ElementLink from './ElementLink';
import { internalUrl, externalUrl, anchorTag } from './ElementLink.mock';

export default {
  title: 'ElementLink',
  decorators: [withKnobs]
};

export const internalUrlLink = () => (
  <ElementLink
    isInternal
    href={internalUrl.href}
    as={internalUrl.as}
    linkText={text('linkText', internalUrl.linkText)}
    icon={text('icon', internalUrl.icon)}
    isModal={boolean('isModal', internalUrl.isModal)}
    isDownload={boolean('isDownload', internalUrl.isDownload)}
    style={text('style', internalUrl.style)}
  />
);
export const externalUrlLink = () => (
  <ElementLink
    isInternal={false}
    href={externalUrl.href}
    as={externalUrl.as}
    linkText={text('linkText', externalUrl.linkText)}
    icon={text('icon', externalUrl.icon)}
    isModal={boolean('isModal', externalUrl.isModal)}
    isDownload={boolean('isDownload', externalUrl.isDownload)}
    style={text('style', externalUrl.style)}
  />
);
export const anchorTagLink = () => (
  <ElementLink
    isInternal={false}
    href={anchorTag.href}
    as={anchorTag.as}
    linkText={text('linkText', anchorTag.linkText)}
    icon={text('icon', anchorTag.icon)}
    isModal={boolean('isModal', anchorTag.isModal)}
    isDownload={boolean('isDownload', anchorTag.isDownload)}
    style={text('style', anchorTag.style)}
  />
);
