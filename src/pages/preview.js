/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFullContentById } from '@integrations/contentful';
import PreviewWrapper from '@components/PreviewWrapper';
import Adapter from '@adapters/contentful';
import loookupComponentByContentType from '@utils/lookupComponentByContentType';

// generated by build script
const urlMap = require('../../content-cache/urlmap.json');

const Preview = () => {
  const {
    query: { id, contentType }
  } = useRouter();

  if (!id || !contentType) return null;

  const transform = Adapter({ urlMap });

  const [fields, setFields] = useState();

  useEffect(async () => {
    const myContent = await getFullContentById(contentType, id);
    setFields(transform(myContent));
  });

  return fields ? <PreviewWrapper {...fields} componentLookup={loookupComponentByContentType} /> : null;
};

export default Preview;
