module.exports = (migration) => {
  // TODO add description
  const localePickerSubmodule = migration.createContentType('localePickerSubmodule').name('Locale Picker Submodule');
  // .description('The main settings for the application.');

  localePickerSubmodule
    .createField('internalTitle')
    .type('Symbol')
    .name('Internal Title')
    .required(true)
    .localized(false);
  localePickerSubmodule.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  localePickerSubmodule
    .createField('languageLinks')
    .type('Array')
    .name('Language Links')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    });
  localePickerSubmodule.changeFieldControl('languageLinks', 'builtin', 'entryLinksEditor', {
    helpText: 'Selectable languages for the selected country.'
  });

  localePickerSubmodule.createField('country').type('Symbol').name('Country').required(true).localized(true);
  localePickerSubmodule.changeFieldControl('country', 'builtin', 'singleLine', {
    helpText: 'Selectable country in the locale picker.'
  });
};
