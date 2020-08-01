import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import HorizontalModule from './HorizontalModule';
import mockContent from './HorizontalModule.mock';

const { _id, _contentTypeId, layout, textModule, image } = mockContent;

export default {
  title: 'HorizontalModule',
  decorators: [withKnobs]
};

export const normal = () => (
  <HorizontalModule
    _id={_id}
    _contentTypeId={_contentTypeId}
    layout={text('layout', layout)}
    textModule={object('textModule', textModule)}
    image={object('image', image)}
  />
);
