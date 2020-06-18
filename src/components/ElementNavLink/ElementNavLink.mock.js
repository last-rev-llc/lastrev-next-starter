import { internalUrl, externalUrl, anchorTag } from '../ElementLink/ElementLink.mock';

export default {
  mainLink: {
    fields: internalUrl
  },
  childrenLinks: [
    {
      sys: { id: '1' },
      fields: externalUrl
    },
    {
      sys: { id: '2' },
      fields: anchorTag
    }
  ]
};
