import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SectionSplitColumn from './SectionSplitColumn';
import mockContent from './SectionSplitColumn.mock';

const SubSectionWrap = ({ children }) => <div className="sub-section">{children}</div>

export default {
  title: 'SectionSplitColumn',
  decorators: [withKnobs, storyFn => <SubSectionWrap>{storyFn()}</SubSectionWrap>]
};

export const normal = () => <SectionSplitColumn header={text('Header Text', mockContent.header)} introText={text('Intro Text', mockContent.introText)} />;
