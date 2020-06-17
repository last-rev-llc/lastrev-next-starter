/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import lookupComponentByContentType from '../../utils/lookupComponentByContentType';
import { getFullContentById } from '../../integrations/contentful';
import propTypes from './PreviewWrapper.propTypes';

function PreviewWrapper({ id, contentType }) {
  if (!id && !contentType) return null;
  const [content, setContent] = useState();
  useEffect(async () => {
    const myContent = await getFullContentById(contentType, id);
    setContent(myContent);
  });
  if (!content) return null;
  try {
    const Component = lookupComponentByContentType(contentType);
    return <Component {...content} />;
  } catch (err) {
    // TODO: replace with logger
    console.log('Error rendering preview', err);
    return null;
  }
}

PreviewWrapper.propTypes = propTypes;

export default PreviewWrapper;
