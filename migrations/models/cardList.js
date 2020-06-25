module.exports = (migration) => {
  // TODO add description
  const cardList = migration.createContentType('cardList').name('Card List');
  // .description('The main settings for the application.');

  cardList.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  cardList.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  cardList
    .createField('titleModule')
    .type('Link')
    .linkType('Entry')
    .name('Title Module')
    .validations([{ linkContentType: ['textModule'] }])
    .required(false)
    .localized(false);
  cardList.changeFieldControl('titleModule', 'builtin', 'entryLinkEditor', {
    helpText: 'Specify the text module which appears above cards.'
  });

  cardList
    .createField('cards')
    .type('Array')
    .name('Cards')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['card'] }]
    });
  cardList.changeFieldControl('cards', 'builtin', 'entryLinksEditor', {
    helpText: 'Choose one or more cards to be displayed in this section.'
  });

  cardList
    .createField('cardStyle')
    .type('Symbol')
    .validations([
      {
        in: ['Promo', 'Save / Share', 'Info', 'Profile']
      }
    ])
    .name('Card Style')
    .required(true)
    .localized(false);
  cardList.changeFieldControl('cardStyle', 'builtin', 'dropdown', {
    helpText: 'Choose a style for cards in this list.'
  });

  cardList
    .createField('listStyle')
    .type('Symbol')
    .validations([
      {
        in: ['3 per row', '2-1 unit', '3-1-3 rows']
      }
    ])
    .name('List Style')
    .required(true)
    .localized(false);
  cardList.changeFieldControl('listStyle', 'builtin', 'dropdown', {
    helpText: 'Choose the list style.'
  });

  cardList
    .createField('link')
    .type('Link')
    .linkType('Entry')
    .name('Link')
    .validations([{ linkContentType: ['elementLink'] }])
    .required(false)
    .localized(false);
  cardList.changeFieldControl('link', 'builtin', 'entryLinkEditor', {
    helpText: 'Optionally include a CTA link.'
  });
};
