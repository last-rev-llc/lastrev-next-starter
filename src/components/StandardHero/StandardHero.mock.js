import faker from 'faker';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'standardHero',
  scrollText: faker.random.word(),
  body: faker.random.words(),
  locatorForm: faker.random.boolean(),
  textTheme: faker.random.word(),
  textJustification: faker.random.word(),
  subtitle: faker.random.word(),
  title: faker.random.word(),
  supertitle: faker.random.word(),
  image: { todo: 'populate this media item' }
};
