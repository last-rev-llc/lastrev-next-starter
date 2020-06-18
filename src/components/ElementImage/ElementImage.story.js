import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ElementImage from './ElementImage';
import mockContent from './ElementImage.mock';

const SubSectionWrap = ({ children }) => <div className="container sub-section">{children}</div>

export default {
  title: 'ElementImage',
  decorators: [withKnobs, storyFn => <SubSectionWrap>{storyFn()}</SubSectionWrap>]
};

export const normal = () => <ElementImage src={text('src', mockContent.src)} alt={text('alt', mockContent.alt)} className={text('className', mockContent.className)} />;
