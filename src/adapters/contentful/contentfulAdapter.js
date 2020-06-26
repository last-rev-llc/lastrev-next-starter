import _ from 'lodash';
import parseLink from './linkParser';

const isContentfulObject = (obj) => {
  return typeof obj === 'object' && _.has(obj, 'sys') && _.has(obj, 'fields');
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

const Adapter = ({
  urlMap,
  linkContentType = 'elementLink',
  sameWindowActionText = 'Open in the same window',
  newWindowActionText = 'Open in a new window',
  modalActionText = 'Open in a modal',
  downloadActionText = 'Download',
  manualEntryTypeText = 'Manual text entry',
  contentRefTypeText = 'Content reference',
  assetRefTypeText = 'Asset reference'
}) => (data) => {
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
        if (contentTypeId === linkContentType) {
          return parseLink({
            sameWindowActionText,
            newWindowActionText,
            modalActionText,
            downloadActionText,
            manualEntryTypeText,
            contentRefTypeText,
            assetRefTypeText,
            fields,
            urlMap
          });
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
