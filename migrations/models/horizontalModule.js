module.exports = (migration) => {
  // TODO add description
  const horizontalModule = migration.createContentType('horizontalModule').name('Horizontal Module');
  // .description('The main settings for the application.');

  horizontalModule.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  horizontalModule.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  horizontalModule
    .createField('layout')
    .type('Symbol')
    .name('Layout')
    .validations([
      {
        in: ['copy left', 'copy right']
      }
    ])
    .required(true)
    .localized(false);
  horizontalModule.changeFieldControl('layout', 'builtin', 'dropdown', {
    helpText: 'Select the layout of the module.'
  });

  horizontalModule
    .createField('textModule')
    .type('Link')
    .linkType('Entry')
    .name('Text Module')
    .validations([{ linkContentType: ['textModule'] }])
    .required(true)
    .localized(false);
  horizontalModule.changeFieldControl('textModule', 'builtin', 'entryLinkEditor', {
    helpText: 'Select the text block to display in the module.'
  });

  horizontalModule
    .createField('image')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .name('Image')
    .required(true)
    .localized(true);
  horizontalModule.changeFieldControl('image', 'builtin', 'assetLinkEditor', {
    helpText: 'Select the image to display in the module.'
  });
};
