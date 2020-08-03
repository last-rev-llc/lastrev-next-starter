import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import CardList from './CardList';
import mockContent from './CardList.mock';

const { _id, _contentTypeId, titleModule, cards, cardStyle, listStyle, link } = mockContent;

export default {
  title: 'CardList',
  decorators: [withKnobs]
};

export const normal = () => (
  <CardList
    _id={_id}
    _contentTypeId={_contentTypeId}
    titleModule={object('titleModule', titleModule)}
    cards={object('cards', cards)}
    cardStyle={text('cardStyle', cardStyle)}
    listStyle={text('listStyle', listStyle)}
    link={object('link', link)}
  />
);
