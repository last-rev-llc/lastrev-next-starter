module.exports = (migration) => {
  // TODO add description
  const textModule = migration.createContentType('textModule').name('Text Module');
  // .description('The main settings for the application.');

  textModule.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  textModule.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  textModule
    .createField('textJustification')
    .type('Symbol')
    .name('Text Justification')
    .validations([
      {
        in: ['left', 'center', 'right']
      }
    ])
    .required(true)
    .localized(false);
  textModule.changeFieldControl('textJustification', 'builtin', 'dropdown', {
    helpText: 'Select the justification for the text module.'
  });

  textModule
    .createField('link')
    .type('Link')
    .linkType('Entry')
    .name('Link')
    .validations([{ linkContentType: ['elementLink'] }])
    .required(false)
    .localized(false);
  textModule.changeFieldControl('link', 'builtin', 'entryLinkEditor', {
    helpText: 'Specify an optional link to be displayed at the bottom of the text module.'
  });

  textModule
    .createField('bodySize')
    .type('Symbol')
    .name('Body Size')
    .validations([
      {
        in: ['small', 'medium', 'large']
      }
    ])
    .required(false)
    .localized(false);
  textModule.changeFieldControl('bodySize', 'builtin', 'dropdown', {
    helpText: 'Select the text size of the body text.'
  });

  textModule.createField('title').type('Symbol').name('Title').required(true).localized(true);
  textModule.changeFieldControl('title', 'builtin', 'singleLine', {
    helpText: 'Specify the main title or header for the text module.'
  });

  textModule.createField('supertitle').type('Symbol').name('Supertitle').required(false).localized(true);
  textModule.changeFieldControl('supertitle', 'builtin', 'singleLine', {
    helpText: 'Specify an optional supertitle to display as a parenthetical above the title.'
  });

  textModule.createField('body').type('Text').name('Body').required(false).localized(true);
  textModule.changeFieldControl('body', 'builtin', 'multipleLine', {
    helpText: 'Specify optional body content to be displayed below the title.'
  });

  textModule
    .createField('icon')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .name('Icon')
    .required(false)
    .localized(false);
  textModule.changeFieldControl('icon', 'builtin', 'assetLinkEditor', {
    helpText: 'Specify an optional icon to display above the text.'
  });
};
