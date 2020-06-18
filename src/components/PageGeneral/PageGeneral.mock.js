import moduleRichTextMock from '../ModuleRichText/ModuleRichText.mock';
import moduleHeroMock from '../ModuleHero/ModuleHero.mock';

export default {
  internalTitle: 'Homepage',
  pageTitle: 'Homepage',
  slug: '/home',
  pageHero: {
    fields: moduleHeroMock
  },
  modules: [
    {
      sys: {
        contentType: {
          sys: {
            id: 'ModuleRichText'
          }
        },
        id: '1234'
      },
      fields: moduleRichTextMock
    }
  ]
};
