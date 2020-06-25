module.exports = (migration) => {
  // TODO add description
  const subnavCard = migration.createContentType('subnavCard').name('Subnav Card');
  // .description('The main settings for the application.');

  subnavCard
    .createField('primaryLink')
    .type('Link')
    .linkType('Entry')
    .name('Primary Link')
    .validations([{ linkContentType: ['elementLink'] }])
    .required(true)
    .localized(false);
  subnavCard.changeFieldControl('primaryLink', 'builtin', 'entryLinkEditor', {
    helpText: 'The link displayed at the top of the subnav card.'
  });

  subnavCard.createField('introText').type('Symbol').name('Intro Text').required(true).localized(true);
  subnavCard.changeFieldControl('introText', 'builtin', 'singleLine', {
    helpText: 'Brief introductory text displayed below the primary link.'
  });

  subnavCard
    .createField('secondaryLinks')
    .type('Array')
    .name('Secondary Links')
    .required(false)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['elementLink'] }]
    })
    .validations([{ size: { max: 6 } }]);
  subnavCard.changeFieldControl('secondaryLinks', 'builtin', 'entryLinksEditor', {
    helpText:
      'Up to six links displayed below the intro text. Ordered top to bottom in two columns of three links each, filling the left column first and then overflowing to the right column.'
  });

  subnavCard
    .createField('subNavCardStyle')
    .type('Symbol')
    .name('SubNav Card Style')
    .validations([
      {
        in: ['one column', 'two columns']
      }
    ])
    .required(true)
    .localized(false);
  subnavCard.changeFieldControl('subNavCardStyle', 'builtin', 'dropdown', {
    helpText: 'Choose how many columns to use to display Secondary Links.'
  });

  subnavCard.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  subnavCard.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });
};
