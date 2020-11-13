import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import PageOther from './PageOther';
import mockContent from './PageOther.mock';

const { _id, _contentTypeId, title, slug, targeting } = mockContent;

export default {
  title: 'PageOther',
  decorators: [withKnobs]
};

export const normal = () => (
  <PageOther
    _id={_id}
    _contentTypeId={_contentTypeId}
    title={text('title', title)}
    slug={text('slug', slug)}
    targeting={object('targeting', targeting)}
  />
);
