import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import LocalePickerSubmodule from './LocalePickerSubmodule';
import mockContent from './LocalePickerSubmodule.mock';

const { _id, _contentTypeId, languageLinks, country } = mockContent;

export default {
  title: 'LocalePickerSubmodule',
  decorators: [withKnobs]
};

export const normal = () => (
  <LocalePickerSubmodule
    _id={_id}
    _contentTypeId={_contentTypeId}
    languageLinks={object('languageLinks', languageLinks)}
    country={text('country', country)}
  />
);
