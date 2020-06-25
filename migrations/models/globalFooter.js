module.exports = (migration) => {
  // TODO add description
  const globalFooter = migration.createContentType('globalFooter').name('Global Footer');
  // .description('The main settings for the application.');

  globalFooter.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  globalFooter.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  globalFooter
    .createField('localePickerSubmodules')
    .type('Array')
    .name('Locale Picker Sub Modules')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['localePickerSubmodule'] }]
    });
  globalFooter.changeFieldControl('localePickerSubmodules', 'builtin', 'entryLinksEditor', {
    helpText: 'Locale subnav modules containing selectable languages.'
  });

  globalFooter
    .createField('localeDiscloserIcon')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .name('Locale Discloser Icon')
    .required(true)
    .localized(false);
  globalFooter.changeFieldControl('localeDiscloserIcon', 'builtin', 'assetLinkEditor', {
    helpText: 'Icon to display to the left of locale discloser text.'
  });

  globalFooter.createField('column1Header').type('Symbol').name('Column 1 Header').required(true).localized(true);
  globalFooter.changeFieldControl('column1Header', 'builtin', 'singleLine', {
    helpText: 'The header displayed at the top of the left-most footer nav column.'
  });

  globalFooter.createField('column2Header').type('Symbol').name('Column 2 Header').required(true).localized(true);
  globalFooter.changeFieldControl('column2Header', 'builtin', 'singleLine', {
    helpText: 'The header displayed at the top of the second-from-left footer nav column.'
  });

  globalFooter.createField('column3Header').type('Symbol').name('Column 3 Header').required(true).localized(true);
  globalFooter.changeFieldControl('column3Header', 'builtin', 'singleLine', {
    helpText: 'The header displayed at the top of the third-from-left footer nav column.'
  });

  globalFooter
    .createField('column4Links')
    .type('Array')
    .name('Column 4 Links')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    })
    .validations([{ size: { min: 1 } }]);
  globalFooter.changeFieldControl('column4Links', 'builtin', 'entryLinksEditor', {
    helpText: 'Links to be displayed below the header.'
  });

  globalFooter.createField('copyright').type('Symbol').name('Copyright Text').required(true).localized(true);
  globalFooter.changeFieldControl('copyright', 'builtin', 'singleLine', {
    helpText: 'To be displayed in the bottom right corner of the global footer.'
  });

  globalFooter
    .createField('utilityNavs')
    .type('Array')
    .name('Utility Nav Links')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    });
  globalFooter.changeFieldControl('utilityNavs', 'builtin', 'entryLinksEditor', {
    helpText: 'To be displayed in the bottom right corner of the global footer.'
  });

  globalFooter
    .createField('socialLink')
    .type('Array')
    .name('Social Links')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    });
  globalFooter.changeFieldControl('socialLink', 'builtin', 'entryLinksEditor', {
    helpText: 'Social bar to be displayed at the bottom of the global footer.'
  });

  globalFooter
    .createField('column3Links')
    .type('Array')
    .name('Column 3 Links')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    })
    .validations([{ size: { min: 1 } }]);
  globalFooter.changeFieldControl('column3Links', 'builtin', 'entryLinksEditor', {
    helpText: 'Links to be displayed below the header.'
  });

  globalFooter.createField('column4Header').type('Symbol').name('Column 4 Header').required(true).localized(true);
  globalFooter.changeFieldControl('column4Header', 'builtin', 'singleLine', {
    helpText: 'The header displayed at the top of the right-most footer nav column.'
  });

  globalFooter
    .createField('localeDiscloserText')
    .type('Symbol')
    .name('Locale Discloser Text')
    .required(true)
    .localized(true);
  globalFooter.changeFieldControl('localeDiscloserText', 'builtin', 'singleLine', {
    helpText: 'Text to display on locale discloser.'
  });

  globalFooter
    .createField('column1Links')
    .type('Array')
    .name('Column 1 Links')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    })
    .validations([{ size: { min: 1 } }]);
  globalFooter.changeFieldControl('column1Links', 'builtin', 'entryLinksEditor', {
    helpText: 'Links to be displayed below the header.'
  });

  globalFooter
    .createField('logoUrl')
    .type('Symbol')
    .name('Logo URL')
    .validations([
      {
        regexp: {
          pattern: '^(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$'
        }
      }
    ])
    .required(true)
    .localized(false);
  globalFooter.changeFieldControl('logoUrl', 'builtin', 'singleLine', {
    helpText: 'The page to navigate to when clicking the logo.'
  });

  globalFooter
    .createField('column2Links')
    .type('Array')
    .name('Column 2 Links')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    })
    .validations([{ size: { min: 1 } }]);
  globalFooter.changeFieldControl('column2Links', 'builtin', 'entryLinksEditor', {
    helpText: 'Links to be displayed below the header.'
  });

  globalFooter
    .createField('logo')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .name('Company Logo')
    .required(true)
    .localized(false);
  globalFooter.changeFieldControl('logo', 'builtin', 'assetLinkEditor', {
    helpText: 'The logo to be displayed the top of the global nav'
  });

  globalFooter
    .createField('style')
    .type('Symbol')
    .validations([
      {
        in: ['all']
      }
    ])
    .name('Style')
    .required(true)
    .localized(false);
  globalFooter.changeFieldControl('style', 'builtin', 'dropdown', {
    helpText: 'Not currently used.'
  });
};
