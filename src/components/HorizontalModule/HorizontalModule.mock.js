import faker from 'faker';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'horizontalModule',
  layout: faker.random.word(),
  textModule: { todo: 'populate this object' },
  image: { todo: 'populate this media item' }
};
