import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Card from './Card';
import mockContent from './Card.mock';

const { title, summary, cta, img } = mockContent;

const ColWrap = ({ children }) => <div className="container sub-section"><div className="row"><div className="col-12 col-md-6 col-lg-4 col-xl-3">{children}</div></div></div>;

export default {
  title: 'Card',
  decorators: [withKnobs, storyFn => <ColWrap>{storyFn()}</ColWrap>]
};

export const normal = () => <Card title={text('Header Text', title)} summary={text('Summary Text', summary)} cta={cta} img={img} />;
export const ctaButton = () => <Card title={text('Header Text', title)} summary={text('Summary Text', summary)} cta={cta} img={img} />;
export const noImage = () => <Card title={text('Header Text', title)} summary={text('Summary Text', summary)} cta={cta} />;
