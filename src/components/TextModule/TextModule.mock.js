import faker from 'faker';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'textModule',
  textJustification: faker.random.word(),
  link: { todo: 'populate this object' },
  bodySize: faker.random.word(),
  title: faker.random.word(),
  supertitle: faker.random.word(),
  body: faker.random.words(),
  icon: { todo: 'populate this media item' }
};
