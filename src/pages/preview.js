import React from 'react';
import { useRouter } from 'next/router';

import PreviewWrapper from '../components/PreviewWrapper';

// TODO: This should be created by build script
const urlMap = {
  pageGeneral: {
    url: '/[key]',
    key: 'slug'
  }
};

const Preview = () => {
  const {
    query: { id, contentType }
  } = useRouter();
  return <PreviewWrapper contentType={contentType} id={id} urlMap={urlMap} />;
};

export default Preview;
