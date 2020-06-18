import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ElementLink from './ElementLink';
import mockContent from './ElementLink.mock';

const btnClassName = `${mockContent.className} btn btn-primary`;

const SubSectionWrap = ({ children }) => <div className="container sub-section">{children}</div>

export default {
  title: 'ElementLink',
  decorators: [withKnobs, storyFn => <SubSectionWrap>{storyFn()}</SubSectionWrap>]
};

export const normal = () => <ElementLink url={text('url', mockContent.url)}  text={text('text', mockContent.text)} className={text('className', mockContent.className)} />;
export const button = () => <ElementLink url={text('url', mockContent.url)}  text={text('text', mockContent.text)} className={text('className', btnClassName)} />;
