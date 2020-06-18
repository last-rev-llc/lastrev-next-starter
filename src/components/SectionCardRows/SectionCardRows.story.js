import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SectionCardRows from './SectionCardRows';
import mockContent from './SectionCardRows.mock';

const SubSectionWrap = ({ children }) => <div className="sub-section">{children}</div>

export default {
  title: 'SectionCardRows',
  decorators: [withKnobs, storyFn => <SubSectionWrap>{storyFn()}</SubSectionWrap>]
};

export const normal = () => <SectionCardRows cards={mockContent.cards} />;
