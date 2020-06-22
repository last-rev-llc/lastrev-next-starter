/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import propTypes from './ContentModule.propTypes';
import lookupComponentByContentType from '../../utils/lookupComponentByContentType';

const ContentModule = ({ contentTypeId, fields }) => {
  const Main = lookupComponentByContentType(contentTypeId);

  return <Main {...fields} />;
};

ContentModule.propTypes = propTypes;

export default ContentModule;
