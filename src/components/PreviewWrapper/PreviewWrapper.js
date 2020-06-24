/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export const PreviewWrapperPropTypes = {
  componentLookup: PropTypes.func.isRequired,
  contentTypeId: PropTypes.string.isRequired
};

function PreviewWrapper({ componentLookup, contentTypeId, ...fields }) {
  const Component = componentLookup(contentTypeId);

  return <Component {...fields} />;
}

PreviewWrapper.propTypes = PreviewWrapperPropTypes;

export default PreviewWrapper;
