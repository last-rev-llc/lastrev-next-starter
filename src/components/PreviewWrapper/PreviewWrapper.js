/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import lookupComponentByContentType from '../../utils/lookupComponentByContentType';
import { getFullContentById } from '../../integrations/contentful';
import propTypes from './PreviewWrapper.propTypes';
// TODO: this is very coupled to Contentful, but that may just be the case with this component.
import Adapter from '../../adapters/contentful';

function PreviewWrapper({ id, contentType, urlMap }) {
  if (!id && !contentType) return null;
  const transform = Adapter({ urlMap });
  const [content, setContent] = useState();
  useEffect(async () => {
    const myContent = await getFullContentById(contentType, id);
    setContent(transform(myContent));
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
