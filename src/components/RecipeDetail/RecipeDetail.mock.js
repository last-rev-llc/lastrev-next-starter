import faker from 'faker';
import RecipeDetailMock from '../RecipeDetail/RecipeDetail.mock';
import RichTextParserMock from '../RichTextParser/RichTextParser.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'recipeDetail',
  excludedLocales: faker.random.word(),
  similarRecipes: [RecipeDetailMock],
  steps: { todo: 'add data for this Object' },
  ingredients: { todo: 'add data for this Object' },
  description: RichTextParserMock,
  cookTime: faker.random.number(),
  prepTime: faker.random.number(),
  difficulty: faker.random.word(),
  servings: faker.random.number(),
  authorName: faker.random.word(),
  image: { todo: 'populate this media item' },
  authorImage: { todo: 'populate this media item' },
  title: faker.random.word(),
  slug: faker.random.word()
};
