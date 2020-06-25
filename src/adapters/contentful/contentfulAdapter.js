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

const parseLink = ({ internalUrlActionText, externalUrlActionText, anchorLinkActionText, urlMap, fields }) => {
  const { action, internalUrl, externalUrl, linkText, anchorTagName, icon } = fields;

  let href;
  let as;
  let target;
  let isInternal = false;

  switch (action) {
    case internalUrlActionText: {
      if (!internalUrl) throw Error('internalUrl not selected', internalUrl);
      const {
        fields: { slug },
        sys: {
          contentType: {
            sys: { id: contentTypeId }
          }
        }
      } = internalUrl;
      if (!_.has(urlMap, contentTypeId)) throw Error(`urlMap does not contain entry for ${contentTypeId}`);
      ({ href, as } = getUrl(urlMap[contentTypeId], slug));
      isInternal = true;
      break;
    }

    case externalUrlActionText:
      if (!externalUrl) throw Error('externalUrl empty', externalUrl);
      href = externalUrl;
      target = '_blank';
      break;
    case anchorLinkActionText:
      if (!anchorTagName) throw Error('anchorTagName empty', anchorTagName);
      href = `#${anchorTagName}`;
      break;
    default:
      break;
  }

  return {
    linkText,
    isInternal,
    href,
    as,
    target,
    icon
  };
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
            internalUrlActionText,
            externalUrlActionText,
            anchorLinkActionText,
            contentTypeId,
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
