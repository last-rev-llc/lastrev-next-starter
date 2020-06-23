// eslint-disable-next-line import/no-self-import
const contentful = require('contentful');
const _ = require('lodash');

const removeCircularRefs = (entries) => {
  return JSON.parse(entries.stringifySafe());
};

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV || 'master',
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  host: process.env.CONTENTFUL_HOST || 'preview.contentful.com'
});

exports.getPageBySlug = async (slug, contentType) => {
  try {
    const entries = await client.getEntries({
      'content_type': contentType,
      'fields.slug': slug,
      'include': 4
    });
    return _.head(removeCircularRefs(entries).items);
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.getFullContentById = async (contentType, id) => {
  const queryResults = await client.getEntries({
    'content_type': contentType,
    'sys.id': id,
    'include': 5
  });

  return _.head(queryResults.items);
};

exports.getStaticSlugsForContentType = async (contentType) => {
  const queryResults = await client.getEntries({
    content_type: contentType,
    select: 'fields.slug'
  });

  if (queryResults.items) {
    return queryResults.items.map((item) => item.fields.slug);
  }

  return [];
};

exports.getGlobalSettings = async () => {
  const entries = await client.getEntries({
    'content_type': 'settingsGlobal',
    'sys.id': process.env.CONTENTFUL_SETTINGS_ID,
    'include': 2
  });
  return _.head(removeCircularRefs(entries).items);
};
