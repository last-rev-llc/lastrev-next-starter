module.exports = (migration) => {
  // TODO add description
  const card = migration.createContentType('card').name('Card');
  // .description('The main settings for the application.');

  card.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  card.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  // TODO review validations, seems they are not connected, should we add here?
  card
    .createField('linkedContent')
    .type('Link')
    .linkType('Entry')
    .name('Linked Content')
    .validations([{ linkContentType: ['recipeDetail'] }])
    .required(true)
    .localized(false);
  card.changeFieldControl('linkedContent', 'builtin', 'entryLinkEditor', {
    helpText: 'Select the content you wish to display in the card.'
  });

  card.createField('headerText').type('Symbol').name('Header Text').required(false).localized(true);
  card.changeFieldControl('headerText', 'builtin', 'singleLine', {
    helpText: 'Overrides header text inherited from the Linked Content.'
  });

  card.createField('subhead').type('Symbol').name('Subhead').required(false).localized(true);
  card.changeFieldControl('subhead', 'builtin', 'singleLine', {
    helpText: 'Overrides subhead text inherited from linked content.'
  });

  card.createField('supportingText').type('Symbol').name('Supporting Text').required(false).localized(true);
  card.changeFieldControl('supportingText', 'builtin', 'singleLine', {
    helpText: 'Overrides supporting text inherited from linked content.'
  });

  // TODO Link in notion
  card
    .createField('media')
    .type('Link')
    .linkType('Asset')
    .name('Media')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .required(false)
    .localized(false);
  card.changeFieldControl('media', 'builtin', 'entryLinkEditor', {
    helpText: 'Overrides media inherited from the Linked Content.'
  });

  card
    .createField('url')
    .type('Symbol')
    .name('URL')
    .validations([
      {
        regexp: {
          pattern: '^(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$'
        }
      }
    ])
    .required(false)
    .localized(false);
  card.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText:
      'Specify an optional URL where the user should navigate after clicking the card. Overrides any URL inherited from linked content.'
  });
};
