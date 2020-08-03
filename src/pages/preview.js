import React from 'react';
import { useRouter } from 'next/router';

import PreviewWrapper from '../components/PreviewWrapper';

function Preview() {
  const router = useRouter();
  const {
    query: { id, contentType, locale }
  } = router;
  return <PreviewWrapper contentType={contentType} id={id} locale={locale} />;
}

export default Preview;
