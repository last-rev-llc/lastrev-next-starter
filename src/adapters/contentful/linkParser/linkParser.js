import _ from 'lodash';

const getUrl = (mapping, slug) => {
  return {
    href: mapping.url.replace('[key]', `[${mapping.key}]`),
    as: mapping.url.replace('[key]', `${slug}`)
  };
};

export default ({
  newWindowActionText,
  modalActionText,
  downloadActionText,
  manualEntryTypeText,
  contentRefTypeText,
  assetRefTypeText,
  fields,
  urlMap
}) => {
  const { action, destinationType, manualUrl, contentReference, assetReference } = fields;

  const isModal = action === modalActionText;
  const download = action === downloadActionText;
  const target = action === newWindowActionText ? '_blank' : null;

  let href = null;
  let as = null;

  switch (destinationType) {
    case manualEntryTypeText:
      if (!manualUrl) {
        throw Error(`DestinationType is ${manualEntryTypeText}, but no URL has been entered`);
      }
      href = manualUrl;
      break;
    case contentRefTypeText: {
      if (!contentReference) {
        throw Error(`DestinationType is ${contentRefTypeText}, but no content reference is selected`);
      }
      const {
        sys: {
          contentType: {
            sys: { id: referenceContentTypeId }
          }
        },
        fields: { slug }
      } = contentReference;
      if (!_.has(urlMap, referenceContentTypeId)) throw Error(`urlMap does not contain entry for ${contentTypeId}`);
      ({ href, as } = getUrl(urlMap[referenceContentTypeId], slug));
      break;
    }
    case assetRefTypeText:
      if (!assetReference) {
        throw Error(`DestinationType is ${assetRefTypeText}, but no asset is selected`);
      }
      ({
        fields: {
          file: { url: href }
        }
      } = assetReference);
      break;
    default:
      break;
  }

  return {
    ...fields,
    href,
    as,
    target,
    isModal,
    download
  };
};
