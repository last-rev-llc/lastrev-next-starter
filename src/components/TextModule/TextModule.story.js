import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import TextModule from './TextModule';
import mockContent from './TextModule.mock';

const { _id, _contentTypeId, textJustification, link, bodySize, title, supertitle, body, icon } = mockContent;

export default {
  title: 'TextModule',
  decorators: [withKnobs]
};

export const normal = () => (
  <TextModule
    _id={_id}
    _contentTypeId={_contentTypeId}
    textJustification={text('textJustification', textJustification)}
    link={object('link', link)}
    bodySize={text('bodySize', bodySize)}
    title={text('title', title)}
    supertitle={text('supertitle', supertitle)}
    body={text('body', body)}
    icon={object('icon', icon)}
  />
);
