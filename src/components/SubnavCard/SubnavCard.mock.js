import faker from 'faker';
import ElementLinkMock from '../ElementLink/ElementLink.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'subnavCard',
  primaryLink: { todo: 'populate this object' },
  introText: faker.random.word(),
  secondaryLinks: [ElementLinkMock],
  subNavCardStyle: faker.random.word()
};
