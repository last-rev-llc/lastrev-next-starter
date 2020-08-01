import faker from 'faker';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'card',
  linkedContent: { todo: 'populate this object' },
  headerText: faker.random.word(),
  subhead: faker.random.word(),
  supportingText: faker.random.word(),
  media: { todo: 'populate this media item' },
  url: faker.random.word()
};
