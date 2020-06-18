# PreviewWrapper

## Parameters:

This component takes two required parameters:  
`contentType` - The Contentful contentType you are previewing  
`id` - The Contentful ID of the specific content item you are previewing

## Setup

To use this component, it needs to live at a page. in your `pages` directory, create a file, generally `pages/preview.js`, and call the following:

```javascript
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
```

This will extract the `id` and `contentType` params from the URL.

## Attaching to Contentful

In your Contentful space, go to _Settings_ > _Content Preview_ and click _Add Content Preview_. For each type you want to preview, select the checkbox and enter the URL of the deployed preview page, adding in the correct params, as shown below:

`https://develop.my-app.com/preview/?id={entry.sys.id}&contentType=pageGeneral`
