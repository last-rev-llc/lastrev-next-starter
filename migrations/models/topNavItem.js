module.exports = (migration) => {
  // TODO add description
  const topNavItem = migration.createContentType('topNavItem').name('Top Nav Item');
  // .description('The main settings for the application.');

  topNavItem
    .createField('subnavCards')
    .type('Array')
    .name('Subnav Cards')
    .required(false)
    .localized(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['subnavCard'] }]
    });
  topNavItem.changeFieldControl('subnavCards', 'builtin', 'entryLinksEditor', {
    helpText:
      'Specify the subnav cards to display when a user mouses over the top nav item (ordered from left to right).'
  });

  topNavItem
    .createField('title')
    .type('Link')
    .linkType('Entry')
    .name('Title')
    .validations([{ linkContentType: ['elementLink'] }])
    .required(true)
    .localized(false);
  topNavItem.changeFieldControl('title', 'builtin', 'entryLinkEditor', {
    helpText: 'Select a link to be displayed in the top nav (can be text or icon).'
  });

  topNavItem.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  topNavItem.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });
};
