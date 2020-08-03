import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import PageGeneral from './PageGeneral';
import mockContent from './PageGeneral.mock';

const { _id, _contentTypeId, slug, content, pageTitle } = mockContent;

export default {
  title: 'PageGeneral',
  decorators: [withKnobs]
};

export const normal = () => (
  <PageGeneral
    _id={_id}
    _contentTypeId={_contentTypeId}
    slug={text('slug', slug)}
    content={object('content', content)}
    pageTitle={text('pageTitle', pageTitle)}
  />
);
