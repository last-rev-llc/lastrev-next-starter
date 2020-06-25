module.exports = (migration) => {
  // TODO add description
  const topNavBar = migration.createContentType('topNavBar').name('Top Nav Bar');
  // .description('The main settings for the application.');

  topNavBar
    .createField('logoUrl')
    .type('Symbol')
    .name('Company Logo URL')
    .validations([
      {
        regexp: {
          pattern: '^(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$'
        }
      }
    ])
    .required(true)
    .localized(false);
  topNavBar.changeFieldControl('logoUrl', 'builtin', 'singleLine', {
    helpText: 'URL for navigation when a user clicks the logo in the nav bar.'
  });

  topNavBar
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
  topNavBar.changeFieldControl('logo', 'builtin', 'assetLinkEditor', {
    helpText: 'Logo to be displayed on the left of the top nav bar.'
  });

  topNavBar
    .createField('topNavItems')
    .type('Array')
    .name('Top Nav Items')
    .required(false)
    .localized(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['topNavItem'] }]
    });
  topNavBar.changeFieldControl('topNavItems', 'builtin', 'entryLinksEditor', {
    helpText: 'Top nav items, ordered from left to right.'
  });

  topNavBar
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
  topNavBar.changeFieldControl('style', 'builtin', 'dropdown', {
    helpText: 'Not currently used.'
  });

  topNavBar.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  topNavBar.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });
};
