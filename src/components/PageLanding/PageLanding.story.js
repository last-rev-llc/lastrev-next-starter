import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import PageLanding from './PageLanding';
import mockContent from './PageLanding.mock';

const { _id, _contentTypeId, title, slug, targeting } = mockContent;

export default {
  title: 'PageLanding',
  decorators: [withKnobs]
};

export const normal = () => (
  <PageLanding
    _id={_id}
    _contentTypeId={_contentTypeId}
    title={text('title', title)}
    slug={text('slug', slug)}
    targeting={object('targeting', targeting)}
  />
);
