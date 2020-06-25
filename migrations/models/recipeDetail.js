module.exports = (migration) => {
  // TODO add description
  const recipeDetail = migration.createContentType('recipeDetail').name('Recipe Detail');
  // .description('The main settings for the application.');

  recipeDetail.createField('internalTitle').type('Symbol').name('Internal Title').required(true).localized(false);
  recipeDetail.changeFieldControl('internalTitle', 'builtin', 'singleLine', {
    helpText: 'To help reference this page within Contentful.'
  });

  recipeDetail
    .createField('excludedLocales')
    .type('Symbol')
    .name('Excluded Locales')
    .validations([
      {
        in: ['HK', 'US', 'SG']
      }
    ])
    .required(false)
    .localized(false);
  recipeDetail.changeFieldControl('excludedLocales', 'builtin', 'checkbox', {
    helpText: 'Specify any locales where this recipe should not be displayed.'
  });

  recipeDetail
    .createField('similarRecipes')
    .type('Array')
    .name('Similar Recipes')
    .required(true)
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['recipeDetail'] }]
    })
    .validations([{ size: { min: 1 } }]);
  recipeDetail.changeFieldControl('similarRecipes', 'builtin', 'entryLinksEditor', {
    helpText: 'Links to 1 to 3 similar recipes.'
  });

  // TODO update appearance to UIE
  recipeDetail.createField('steps').type('Object').name('Recipe Steps').required(true).localized(true);
  recipeDetail.changeFieldControl('steps', 'builtin', 'objectEditor', {
    helpText: 'The steps required to make the recipe, in the order you wish them to appear on the website.'
  });

  // TODO update appearance to UIE
  recipeDetail.createField('ingredients').type('Object').name('Recipe Ingredients').required(true).localized(true);
  recipeDetail.changeFieldControl('ingredients', 'builtin', 'objectEditor', {
    helpText: 'The ingredients used to make the recipe, in the order you wish them to appear on the website.'
  });

  // TODO update appearance to UIE
  recipeDetail.createField('description').type('RichText').name('Recipe Description').required(true).localized(true);
  recipeDetail.changeFieldControl('description', 'builtin', 'richTextEditor', {
    helpText: 'A brief description of the recipe.'
  });

  recipeDetail.createField('cookTime').type('Integer').name('Cooking Time').required(true).localized(false);
  recipeDetail.changeFieldControl('cookTime', 'builtin', 'numberEditor', {
    helpText: 'Time in minutes.'
  });

  recipeDetail.createField('prepTime').type('Integer').name('Preparation Time').required(true).localized(false);
  recipeDetail.changeFieldControl('prepTime', 'builtin', 'numberEditor', {
    helpText: 'Number of minutes required to prepare the recipe.'
  });

  recipeDetail
    .createField('difficulty')
    .type('Symbol')
    .validations([
      {
        in: ['easy', 'medium', 'hard']
      }
    ])
    .name('Difficulty')
    .required(true)
    .localized(true);
  recipeDetail.changeFieldControl('difficulty', 'builtin', 'dropdown', {
    helpText: "The difficulty of the recipe (difficulty is displayed differently depending on the user's locale)."
  });

  recipeDetail.createField('servings').type('Integer').name('Servings').required(true).localized(false);
  recipeDetail.changeFieldControl('servings', 'builtin', 'numberEditor', {
    helpText: 'The number of servings made by this recipe.'
  });

  recipeDetail.createField('authorName').type('Symbol').name('Author Name').required(true).localized(false);
  recipeDetail.changeFieldControl('authorName', 'builtin', 'singleLine', {
    helpText: "The name of the recipe's author."
  });

  recipeDetail
    .createField('image')
    .type('Link')
    .linkType('Asset')
    .name('Recipe Image')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .required(true)
    .localized(true);
  recipeDetail.changeFieldControl('image', 'builtin', 'entryLinkEditor', {
    helpText: 'An image representing the recipe.'
  });

  recipeDetail
    .createField('authorImage')
    .type('Link')
    .linkType('Asset')
    .name('Author Headshot')
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])
    .required(false)
    .localized(false);
  recipeDetail.changeFieldControl('authorImage', 'builtin', 'entryLinkEditor', {
    helpText: 'Falls back to "globe chef" icon if none is provided.'
  });

  recipeDetail.createField('title').type('Symbol').name('Recipe Title').required(true).localized(true);
  recipeDetail.changeFieldControl('title', 'builtin', 'singleLine', {
    helpText: 'The name of the recipe.'
  });

  recipeDetail.createField('slug').type('Symbol').name('Slug').required(true).localized(false);
  recipeDetail.changeFieldControl('slug', 'builtin', 'slugEditor', {
    helpText: "Used to define the recipe's page path (i.e. /recipes/<slug>)."
  });
};
