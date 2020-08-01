import React from 'react';
import { withKnobs, text, object } from 'src/components/ContentModule/node_modules/@storybook/addon-knobs';
import Card from './Card';
import mockContent from './Card.mock';

const { _id, _contentTypeId, linkedContent, headerText, subhead, supportingText, media, url } = mockContent;

export default {
  title: 'Card',
  decorators: [withKnobs]
};

export const normal = () => (
  <Card
    _id={_id}
    _contentTypeId={_contentTypeId}
    linkedContent={object('linkedContent', linkedContent)}
    headerText={text('headerText', headerText)}
    subhead={text('subhead', subhead)}
    supportingText={text('supportingText', supportingText)}
    media={object('media', media)}
    url={text('url', url)}
  />
);
