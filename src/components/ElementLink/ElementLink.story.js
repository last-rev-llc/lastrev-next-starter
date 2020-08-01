import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ElementLink from './ElementLink';
import { internalUrl, externalUrl, anchorTag, mediaDownload } from './ElementLink.mock';

export default {
  title: 'ElementLink',
  decorators: [withKnobs]
};

export const internalUrlLink = () => (
  <ElementLink
    href={internalUrl.href}
    as={internalUrl.as}
    linkText={text('linkText', internalUrl.linkText)}
    icon={text('icon', internalUrl.icon)}
    target={text('target', internalUrl.target)}
    isModal={boolean('isModal', internalUrl.isModal)}
    download={boolean('download', internalUrl.download)}
    style={text('style', internalUrl.style)}
    trackingId={text('trackingId', internalUrl.trackingId)}
  />
);
export const externalUrlLink = () => (
  <ElementLink
    href={externalUrl.href}
    linkText={text('linkText', externalUrl.linkText)}
    icon={text('icon', externalUrl.icon)}
    target={text('target', externalUrl.target)}
    isModal={boolean('isModal', externalUrl.isModal)}
    download={boolean('download', externalUrl.download)}
    style={text('style', externalUrl.style)}
    trackingId={text('trackingId', externalUrl.trackingId)}
  />
);
export const anchorTagLink = () => (
  <ElementLink
    href={anchorTag.href}
    linkText={text('linkText', anchorTag.linkText)}
    icon={text('icon', anchorTag.icon)}
    target={text('target', anchorTag.target)}
    isModal={boolean('isModal', anchorTag.isModal)}
    download={boolean('download', anchorTag.download)}
    style={text('style', anchorTag.style)}
    trackingId={text('trackingId', anchorTag.trackingId)}
  />
);

export const mediaDownloadLink = () => (
  <ElementLink
    href={mediaDownload.href}
    linkText={text('linkText', mediaDownload.linkText)}
    icon={text('icon', mediaDownload.icon)}
    target={text('target', mediaDownload.target)}
    isModal={boolean('isModal', mediaDownload.isModal)}
    download={boolean('download', mediaDownload.download)}
    style={text('style', mediaDownload.style)}
    trackingId={text('trackingId', mediaDownload.trackingId)}
  />
);
