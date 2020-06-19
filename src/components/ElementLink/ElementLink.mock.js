import mockPageGeneral from '../PageGeneral/PageGeneral.mock';

export const internalUrl = {
  action: 'Go to Internal URL',
  internalUrl: {
    sys: {
      contentType: {
        sys: {
          id: 'pageGeneral'
        }
      }
    },
    fields: mockPageGeneral
  },
  linkText: 'My Page',
  icon: 'None'
};

export const externalUrl = {
  action: 'Go to External URL',
  linkText: 'Last Rev',
  externalUrl: 'http://www.lastrev.com',
  icon: 'None'
};

export const anchorTag = {
  action: 'Anchor Link',
  linkText: 'Top',
  anchorTagName: 'top',
  icon: 'None'
};
