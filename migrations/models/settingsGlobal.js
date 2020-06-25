module.exports = (migration) => {
  const settingsGlobal = migration
    .createContentType('settingsGlobal')
    .name('Global Settings')
    .description('The main settings for the application.');

  settingsGlobal.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  settingsGlobal.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  settingsGlobal
    .createField('topNavBar')
    .type('Link')
    .linkType('Entry')
    .name('Top Nav Bar')
    .validations([{ linkContentType: ['topNavBar'] }])
    .required(true)
    .localized(false);
  settingsGlobal.changeFieldControl('topNavBar', 'builtin', 'entryLinkEditor', {
    helpText: 'Link to Top Nav Bar.'
  });

  settingsGlobal
    .createField('globalFooter')
    .type('Link')
    .linkType('Entry')
    .name('Global Footer')
    .validations([{ linkContentType: ['globalFooter'] }])
    .required(true)
    .localized(false);
  settingsGlobal.changeFieldControl('globalFooter', 'builtin', 'entryLinkEditor', {
    helpText: 'Link to Global Footer.'
  });

  // TODO localization lookup needs to be converted to UIE
  settingsGlobal
    .createField('localizationLookup')
    .type('Object')
    .name('Localization Lookup')
    .required(true)
    .localized(true);
  settingsGlobal.changeFieldControl('localizationLookup', 'builtin', 'objectEditor', {
    helpText: 'Localization constants to be used on the rest of the site.'
  });

  settingsGlobal
    .createField('accountSubnavLinks')
    .type('Array')
    .name('Nav - Logged-in Account - Subnav Links')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    })
    .required(true)
    .localized(false);
  settingsGlobal.changeFieldControl('accountSubnavLinks', 'builtin', 'entryLinkEditor', {
    helpText: 'Select a link to be displayed in the top nav (can be text or icon).'
  });

  settingsGlobal
    .createField('subnavToutImage')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .name('Nav - Log In / Create Account - Tout Image')
    .required(true)
    .localized(true);
  settingsGlobal.changeFieldControl('subnavToutImage', 'builtin', 'assetLinkEditor', {
    helpText: 'Image to be displayed below the tout text for logged out users.'
  });

  settingsGlobal
    .createField('subnavToutText')
    .type('Symbol')
    .name('Nav - Log In / Create Account - Tout Text')
    .required(true)
    .localized(true);
  settingsGlobal.changeFieldControl('subnavToutText', 'builtin', 'singleLine', {
    helpText: 'Text to be displayed at the top of the left column of the account subnav card for non-logged in users.'
  });
};
