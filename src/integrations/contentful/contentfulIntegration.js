// eslint-disable-next-line import/no-self-import
import { createClient } from 'contentful';
import _ from 'lodash';
import Adapter from '@last-rev/adapter-contentful';

const removeCircularRefs = (entries) => {
  return JSON.parse(entries.stringifySafe());
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV || 'master',
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  host: process.env.CONTENTFUL_HOST || 'preview.contentful.com'
});

export const getPageBySlug = async (slug, contentType) => {
  const entries = await client.getEntries({
    'content_type': contentType,
    'fields.slug': slug,
    'include': 4
  });
  return _.head(removeCircularRefs(entries).items);
};

export const getFullContentById = async (contentType, id) => {
  const queryResults = await client.getEntries({
    'content_type': contentType,
    'sys.id': id,
    'include': 5
  });

  return _.head(queryResults.items);
};

export const getStaticSlugsForContentType = async (contentType) => {
  const queryResults = await client.getEntries({
    content_type: contentType,
    select: 'fields.slug'
  });

  if (queryResults.items) {
    return queryResults.items.map((item) => item.fields.slug);
  }

  return [];
};

export const getGlobalSettings = async () => {
  const entries = await client.getEntries({
    'content_type': 'settingsGlobal',
    'sys.id': process.env.CONTENTFUL_SETTINGS_ID,
    'include': 2
  });
  return _.head(removeCircularRefs(entries).items);
};

export const getContentTypes = async () => {
  return client.getContentTypes();
};

export const getContentType = async (contentTypeId) => {
  const queryResults = await client.getContentType(contentTypeId);

  return queryResults || [];
};

export const getFirstItemForContentType = async (contentTypeId) => {
  const queryResults = await client.getEntries({
    content_type: contentTypeId,
    include: 2,
    limit: 1
  });

  if (!queryResults || !queryResults.items || !queryResults.items.length) {
    return null;
  }

  return _.head(removeCircularRefs(queryResults).items);
};

export default (config) => {
  const transform = Adapter(config);
  return _.map(
    [
      getPageBySlug,
      getFullContentById,
      getStaticSlugsForContentType,
      getGlobalSettings,
      getContentType,
      getContentTypes,
      getFirstItemForContentType
    ],
    (func) => {
      return async (...args) => transform(await func(...args));
    }
  );
};
