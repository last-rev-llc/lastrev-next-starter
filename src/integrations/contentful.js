// eslint-disable-next-line import/no-self-import
const contentful = require('contentful');
const _ = require('lodash');

const removeCircularRefs = (entries) => {
  return JSON.parse(entries.stringifySafe());
};

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV || 'master',
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  host: process.env.CONTENTFUL_HOST || 'preview.contentful.com'
});

export const getPageBySlug = async (slug, contentType) => {
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

export const getFullContentById = async (contentType, id) => {
  const queryResults = await client.getEntries({
    'content_type': contentType,
    'sys.id': id,
    'include': 5
  });

  return _.head(queryResults.items);
};

export default {};