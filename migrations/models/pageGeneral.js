module.exports = (migration) => {
  // TODO add description
  const pageGeneral = migration.createContentType('pageGeneral').name('Page General');
  // .description('The main settings for the application.');

  pageGeneral.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  pageGeneral.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  // TODO validate content type array.
  pageGeneral
    .createField('content')
    .type('Array')
    .name('Content')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['standardHero', 'textModule', 'horizontalModule'] }]
    });
  pageGeneral.changeFieldControl('content', 'builtin', 'entryLinksEditor', {
    helpText:
      'Select the content you wish to display on this page. Content will be displayed in the order selected (from top to bottom).'
  });

  pageGeneral.createField('pageTitle').type('Symbol').name('Page Title').required(true).localized(true);
  pageGeneral.changeFieldControl('pageTitle', 'builtin', 'singleLine', {
    helpText: "This title will be displayed in the user's browser."
  });
};
