// eslint-disable-next-line import/no-self-import
import { createClient } from 'contentful';
import _ from 'lodash';
import Adapter from '../../adapters/contentful';

const removeCircularRefs = (entries) => {
  return JSON.parse(entries.stringifySafe());
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV || 'master',
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  host: process.env.CONTENTFUL_HOST || 'preview.contentful.com'
});

const noop = (data) => {
  return data;
};

export const getPageBySlug = async (slug, contentType, transform = noop) => {
  const entries = await client.getEntries({
    'content_type': contentType,
    'fields.slug': slug,
    'include': 4
  });
  return transform(_.head(removeCircularRefs(entries).items));
};

export const getFullContentById = async (contentType, id, transform = noop) => {
  const queryResults = await client.getEntries({
    'content_type': contentType,
    'sys.id': id,
    'include': 5
  });

  return transform(_.head(queryResults.items));
};

export const getStaticSlugsForContentType = async (contentType, transform = noop) => {
  const queryResults = await client.getEntries({
    content_type: contentType,
    select: 'fields.slug'
  });

  if (queryResults.items) {
    return transform(queryResults.items.map((item) => item.fields.slug));
  }

  return [];
};

export const getGlobalSettings = async (transform = noop) => {
  const entries = await client.getEntries({
    'content_type': 'settingsGlobal',
    'sys.id': process.env.CONTENTFUL_SETTINGS_ID,
    'include': 2
  });
  return transform(_.head(removeCircularRefs(entries).items));
};

export const getContentTypes = async () => {
  return client.getContentTypes();
};

export default (config) => {
  const transform = Adapter(config);
  return {
    getPageBySlug: getPageBySlug.bind(null, transform),
    getFullContentById: getFullContentById.bind(null, transform),
    getStaticSlugsForContentType: getStaticSlugsForContentType.bind(null, transform),
    getGlobalSettings: getGlobalSettings.bind(null, transform)
  };
};
