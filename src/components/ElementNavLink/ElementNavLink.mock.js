import { internalUrl, externalUrl, anchorTag } from '../ElementLink/ElementLink.mock';

export default {
  mainLink: internalUrl,
  childrenLinks: [
    { ...externalUrl, id: '1' },
    { ...anchorTag, id: '2' }
  ]
};
