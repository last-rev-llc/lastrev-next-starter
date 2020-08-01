import React from 'react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import StandardHero from './StandardHero';
import mockContent from './StandardHero.mock';

const {
  _id,
  _contentTypeId,
  scrollText,
  body,
  locatorForm,
  textTheme,
  textJustification,
  subtitle,
  title,
  supertitle,
  image
} = mockContent;

export default {
  title: 'StandardHero',
  decorators: [withKnobs]
};

export const normal = () => (
  <StandardHero
    _id={_id}
    _contentTypeId={_contentTypeId}
    scrollText={text('scrollText', scrollText)}
    body={text('body', body)}
    locatorForm={boolean('locatorForm', locatorForm)}
    textTheme={text('textTheme', textTheme)}
    textJustification={text('textJustification', textJustification)}
    subtitle={text('subtitle', subtitle)}
    title={text('title', title)}
    supertitle={text('supertitle', supertitle)}
    image={object('image', image)}
  />
);
