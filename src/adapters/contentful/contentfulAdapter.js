import _ from 'lodash';

const isContentfulObject = (obj) => {
  return typeof obj === 'object' && _.has(obj, 'sys') && _.has(obj, 'fields');
};

const getUrl = (mapping, slug) => {
  return {
    href: mapping.url.replace('[key]', `[${mapping.key}]`),
    as: mapping.url.replace('[key]', `${slug}`)
  };
};

const isEntry = (obj) => {
  const {
    sys: { type }
  } = obj;
  return type === 'Entry';
};

const isAsset = (obj) => {
  const {
    sys: { type }
  } = obj;
  return type === 'Asset';
};

const isInternalUrl = (fields, urlMap, contentTypeId) => {
  return _.has(urlMap, contentTypeId) && _.has(fields, 'slug');
};

const Adapter = ({ urlMap }) => (data) => {
  const traverse = (obj) => {
    if (_.isArray(obj)) {
      return _.map(obj, traverse);
    }
    if (isContentfulObject(obj)) {
      if (isEntry(obj)) {
        const {
          fields,
          sys: {
            id,
            contentType: {
              sys: { id: contentTypeId }
            }
          }
        } = obj;
        const url = {};
        if (isInternalUrl(fields, urlMap, contentTypeId)) {
          const { slug } = fields;
          url.url = getUrl(urlMap[contentTypeId], slug);
        }
        const parsedFields = {};
        _.each(fields, (val, key) => {
          parsedFields[key] = traverse(val);
        });
        return {
          id,
          contentTypeId,
          ...parsedFields,
          ...url
        };
      }
      if (isAsset(obj)) {
        const {
          fields: {
            title,
            description,
            file: {
              url,
              details: {
                size,
                image: { width, height }
              },
              fileName: filename,
              contentType
            }
          }
        } = obj;
        return {
          title,
          description,
          url,
          size,
          width,
          height,
          filename,
          contentType
        };
      }
      return `TODO: ${obj.sys.type}`;
    }
    return obj;
  };

  return traverse(data);
};

export default Adapter;
