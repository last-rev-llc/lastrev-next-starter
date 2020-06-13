import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Card from './Card';
import mockContent from './Card.mock';

const { title, summary } = mockContent;

export default {
  title: 'Card',
  decorators: [withKnobs]
};

export const normal = () => <Card title={title} summary={summary} />;
export const anotherVersion = () => <Card title={title} summary={summary} />;
