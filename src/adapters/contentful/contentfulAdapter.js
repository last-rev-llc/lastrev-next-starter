import _ from 'lodash';
import parseLink from './linkParser';
import parseAsset from './assetParser';
import { isEntry, isAsset, extractContentTypeId, isLink, extractId } from './helpers';

const Adapter = ({
  urlMap = {},
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
    if (isLink(obj, linkContentType)) {
      return parseLink({
        sameWindowActionText,
        newWindowActionText,
        modalActionText,
        downloadActionText,
        manualEntryTypeText,
        contentRefTypeText,
        assetRefTypeText,
        fields: obj.fields,
        urlMap
      });
    }
    if (isEntry(obj)) {
      const id = extractId(obj);
      const contentTypeId = extractContentTypeId(obj);
      const parsedFields = _.mapValues(obj.fields, traverse);
      return {
        id,
        contentTypeId,
        ...parsedFields
      };
    }
    if (isAsset(obj)) {
      return parseAsset(obj);
    }
    if (_.isObject(obj)) {
      return _.mapValues(obj.fields, traverse);
    }
    // most likely a simple value field
    return obj;
  };

  return traverse(data);
};

export default Adapter;
