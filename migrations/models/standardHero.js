module.exports = (migration) => {
  // TODO add description
  const standardHero = migration.createContentType('standardHero').name('Standard Hero');
  // .description('The main settings for the application.');

  standardHero.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  standardHero.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  standardHero.createField('scrollText').type('Symbol').name('Scroll Text').required(true).localized(true);
  standardHero.changeFieldControl('scrollText', 'builtin', 'singleLine', {
    helpText: 'Specify the text to be displayed at the bottom of the hero, inviting the user to scroll down the page.'
  });

  standardHero.createField('body').type('Text').name('Body').required(false).localized(true);
  standardHero.changeFieldControl('body', 'builtin', 'multipleLine', {
    helpText: 'Specify body text.'
  });

  standardHero.createField('locatorForm').type('Boolean').name('Locator Form').required(false).localized(false);
  standardHero.changeFieldControl('locatorForm', 'builtin', 'singleLine', {
    helpText: 'Should we display a locator form just above the "scroll for more" text?'
  });

  standardHero
    .createField('textTheme')
    .type('Symbol')
    .name('Text Theme')
    .validations([
      {
        in: ['light', 'dark']
      }
    ])
    .required(true)
    .localized(false);
  standardHero.changeFieldControl('textTheme', 'builtin', 'dropdown', {
    helpText:
      'Specify text theme. Choose "light" to contrast with a dark background image, and "dark" to contrast with a light background image.'
  });

  standardHero
    .createField('textJustification')
    .type('Symbol')
    .name('Text Justification')
    .validations([
      {
        in: ['left', 'center']
      }
    ])
    .required(true)
    .localized(false);
  standardHero.changeFieldControl('textJustification', 'builtin', 'dropdown', {
    helpText: 'Specify text justification (applied to all text fields with the exception of "scroll for more" text).'
  });

  standardHero.createField('subtitle').type('Symbol').name('Subtitle').required(false).localized(true);
  standardHero.changeFieldControl('subtitle', 'builtin', 'singleLine', {
    helpText: 'Specify text to appear below the title.'
  });

  standardHero.createField('title').type('Symbol').name('Title').required(true).localized(true);
  standardHero.changeFieldControl('title', 'builtin', 'singleLine', {
    helpText: 'Specify the title.'
  });

  standardHero.createField('supertitle').type('Symbol').name('Supertitle').required(false).localized(true);
  standardHero.changeFieldControl('supertitle', 'builtin', 'singleLine', {
    helpText: 'Specify text to appear above the title.'
  });

  standardHero
    .createField('image')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .name('Background Image')
    .required(true)
    .localized(true);
  standardHero.changeFieldControl('image', 'builtin', 'assetLinkEditor', {
    helpText: "Specify the image to be used for the hero's background."
  });
};
