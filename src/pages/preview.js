import React from 'react';
import { useRouter } from 'next/router';

import PreviewWrapper from '../components/PreviewWrapper';

const Preview = () => {
  const router = useRouter();
  const {
    query: { id, contentType }
  } = router;
  return <PreviewWrapper contentType={contentType} id={id} />;
};

export default Preview;
