import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import GlobalFooter from './GlobalFooter';
import mockContent from './GlobalFooter.mock';

const {
  _id,
  _contentTypeId,
  column1Header,
  column2Header,
  column3Header,
  column4Links,
  copyright,
  utilityNavs,
  socialLink,
  column3Links,
  column4Header,
  column1Links,
  logoUrl,
  column2Links,
  logo,
  style
} = mockContent;

export default {
  title: 'GlobalFooter',
  decorators: [withKnobs]
};

export const normal = () => (
  <GlobalFooter
    _id={_id}
    _contentTypeId={_contentTypeId}
    column1Header={text('column1Header', column1Header)}
    column2Header={text('column2Header', column2Header)}
    column3Header={text('column3Header', column3Header)}
    column4Links={object('column4Links', column4Links)}
    copyright={text('copyright', copyright)}
    utilityNavs={object('utilityNavs', utilityNavs)}
    socialLink={object('socialLink', socialLink)}
    column3Links={object('column3Links', column3Links)}
    column4Header={text('column4Header', column4Header)}
    column1Links={object('column1Links', column1Links)}
    logoUrl={text('logoUrl', logoUrl)}
    column2Links={object('column2Links', column2Links)}
    logo={object('logo', logo)}
    style={text('style', style)}
  />
);
