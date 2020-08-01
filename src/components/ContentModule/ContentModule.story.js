import React from 'react';
import PropTypes from 'prop-types';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import ContentModule from './ContentModule';
import ModuleTextMock from '../ModuleText/ModuleText.mock';

const ColWrap = ({ children }) => <div className="container sub-section">{children}</div>;

ColWrap.propTypes = {
  children: PropTypes.string.isRequired
};

export default {
  title: 'ContentModule',
  decorators: [withKnobs, (storyFn) => <ColWrap>{storyFn()}</ColWrap>]
};

export const normal = () => (
  <ContentModule contentTypeId={text('contentTypeId', 'moduleText')} fields={object('fields', ModuleTextMock)} />
);
