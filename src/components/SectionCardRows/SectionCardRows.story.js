import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SectionCardRows from './SectionCardRows';
import mockContent from './SectionCardRows.mock';

export default {
  title: 'SectionCardRows',
  decorators: [withKnobs]
};

export const normal = () => <SectionCardRows cards={mockContent.cards} />;
