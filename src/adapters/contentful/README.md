# Contentful Adapter

Work in Progress

## Purpose

This adapter helps convert contentful data into the shape expected by lastRev components. It does a few things:

- takes the id and contentTypeId prooperties and puts them in the root level of the object
- Takes each of the fields and, if plain, puts them at the root level oofthe object. If they are contentful objects themselves, it will traverse and and parse those as well
- If there is an internalUrl field, and it matches the mapping object passed in (see below), it will add the necessary URL fields to that URL.

## usage

### Options

- `urlMap` - A mapping of contentful contentType IDs to url patterns
- (posubly in the future) `urlParser` - a parsing function in case your content model does not fit with the standard.

```javascript
import ContentfuAdapter from '@bit/lastrev.adapters.contentful';

const urlMap = {
  pageGeneral: {
    url: '/[key]',
    key: 'slug'
  },
  blogEntry: {
    url: '/blog/[key]',
    key: 'blogId'
  }
};

const myContentfulData = getDataFromContentFul(/*...*/);

const outputData = ContentfulAdapter({ urlMap })(myContentfulData);
```
