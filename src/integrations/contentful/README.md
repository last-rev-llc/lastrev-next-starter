# LastRev Contentful Integration

This module provides a set of useful cuntions for querying data from Contentful, and adapting that data to LastRev structured websites.

## Environment variables

This module expects the following environment variables:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ENV`
- `CONTENTFUL_ACCESSTOKEN`
- `CONTENTFUL_HOST`

## usage

The module can be used one of two ways. First you can call the methods directly, which will give you the raw Contentful data:

```javascript
import { getPageBySlug } from '@bit.dev/lastrev.integrations/contentful';

getPageBySlub(id, contentType).then((raw) => {
  console.log(raw);
  /*
  {
    sys: {
      id: '1234',
      contentType: {
        sys: {
          id: 'moduleCardGeneral'
        }
      }
    },
    fields: {
      title: 'My Title',
      image: ...
    }
  }
  */
});
```

The other way to use it is to initialise the default export with a configuration for the `@bit.dev/lastrev.adapters/contentful` adapter. The resulting functions will then be adapted to the shape expected by LastRev components:

```javascript
import Contentful from '@bit.dev/lastrev.integrations/contentful';

const urlMap = {
  pageGeneral: {
    url: '/[key]',
    key: 'slug'
  },
  pageBlog: {
    url: '/[key]',
    key: 'blogId'
  }
};

const linkContentType = 'ctaLink';

const { getPageBySlug } = Contentful({ urlMap, linkContentType });

getPageBySlub(id, contentType).then((clean) => {
  console.log(clean);
  /*
  {
    id: '1234',
    contentTypeId: 'moduleCardGeneral',
    title: 'My Title',
    image: ...
  }
  */
});
```
