import React from 'react';
import PropTypes from 'prop-types';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Asset from './Asset';
import mockContent from './Asset.mock';

const { contentType, filename, title, url, width, height, size } = mockContent;

const ColWrap = ({ children }) => <div className="container sub-section alert alert-primary py-5">{children}</div>;

ColWrap.propTypes = {
  children: PropTypes.shape.isRequired
};

export default {
  title: 'Asset',
  decorators: [withKnobs, (storyFn) => <ColWrap>{storyFn()}</ColWrap>]
};

export const normal = () => (
  <Asset
    contentType={text('contentType', contentType)}
    filename={text('filename', filename)}
    height={number('height', height)}
    size={number('size', size)}
    title={text('title', title)}
    url={text('url', url)}
    width={number('width', width)}
  />
);
