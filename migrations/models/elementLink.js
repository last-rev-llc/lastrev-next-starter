module.exports = (migration) => {
  // TODO add description
  const elementLink = migration.createContentType('elementLink').name('Element Link');
  // .description('The main settings for the application.');

  elementLink.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  elementLink.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  elementLink
    .createField('style')
    .type('Symbol')
    .validations([
      {
        in: ['light link', 'dark link', 'light button', 'dark button', 'blue button', 'rounded button']
      }
    ])
    .name('Style')
    .required(true)
    .localized(false);
  elementLink.changeFieldControl('style', 'builtin', 'dropdown', {
    helpText: 'The theme of the CTA.'
  });

  elementLink
    .createField('action')
    .type('Symbol')
    .validations([
      {
        in: ['Go to Internal URL', 'Go to External URL', 'Anchor Link']
      }
    ])
    .name('Action')
    .required(true)
    .localized(false);
  elementLink.changeFieldControl('action', 'builtin', 'dropdown', {
    helpText: 'What will this CTA do?'
  });

  elementLink.createField('internalUrl').type('Symbol').name('Internal URL').required(false).localized(false);
  elementLink.changeFieldControl('internalUrl', 'builtin', 'singleLine', {
    helpText:
      'If the CTA links to a page on the Impossible Foods website, please specify the path here (anything after impossiblefoods.co).'
  });

  elementLink
    .createField('externalUrl')
    .type('Symbol')
    .name('External URL')
    .validations([
      {
        regexp: {
          pattern: '^(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$'
        }
      }
    ])
    .required(false)
    .localized(false);
  elementLink.changeFieldControl('externalUrl', 'builtin', 'singleLine', {
    helpText: 'If the CTA links to page outside of the impossiblfoods.com domain, please specify the entire URL here.'
  });

  elementLink.createField('anchorTagName').type('Symbol').name('Anchor Tag Name').required(false).localized(false);
  elementLink.changeFieldControl('anchorTagName', 'builtin', 'singleLine', {
    helpText: 'This will append "#" + the value you add to this field.'
  });

  elementLink.createField('text').type('Symbol').name('Text').required(false).localized(true);
  elementLink.changeFieldControl('text', 'builtin', 'singleLine', {
    helpText: 'The text to be displayed.'
  });

  elementLink
    .createField('target')
    .type('Symbol')
    .validations([
      {
        in: ['_blank', '_self', '_parent', '_top']
      }
    ])
    .name('Target')
    .required(true)
    .localized(false);
  elementLink.changeFieldControl('target', 'builtin', 'singleLine', {
    helpText:
      'How should the browser open the link destination?\n_blank = opens the link in a new window\n_self = opens the link content in the same frame as the link\n_parent = opens the link content in the parent frame of the link\n_top = opens the link in the full body of the window'
  });

  elementLink
    .createField('icon')
    .type('Symbol')
    .validations([
      {
        in: ['arrow', 'magnifying glass', 'location', 'profile', 'cart']
      }
    ])
    .name('Icon')
    .required(false)
    .localized(false);
  elementLink.changeFieldControl('icon', 'builtin', 'singleLine', {
    helpText: 'The icon to be displayed to the right of the text (if it is present)'
  });

  elementLink
    .createField('thirdPartyTrackingId')
    .type('Symbol')
    .name('Third Party Tracking ID')
    .required(false)
    .localized(false);
  elementLink.changeFieldControl('thirdPartyTrackingId', 'builtin', 'singleLine', {
    helpText: 'Not currently used.'
  });
};
