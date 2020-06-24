/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export const ContentModulePropTypes = {
  contentTypeId: PropTypes.string.isRequired,
  moduleLookup: PropTypes.func.isRequired
};

const ContentModule = ({ contentTypeId, moduleLookup, ...fields }) => {
  const Main = moduleLookup(contentTypeId);

  return <Main {...fields} />;
};

ContentModule.propTypes = ContentModulePropTypes;

export default ContentModule;
