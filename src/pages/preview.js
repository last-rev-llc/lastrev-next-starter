import React from 'react';
import { useRouter } from 'next/router';

import PreviewWrapper from '../components/PreviewWrapper';

const Preview = () => {
  const {
    query: { id, contentType }
  } = useRouter();
  return <PreviewWrapper contentType={contentType} id={id} />;
};

export default Preview;
