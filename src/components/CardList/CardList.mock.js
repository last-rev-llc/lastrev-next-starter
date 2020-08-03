import faker from 'faker';
import CardMock from '../Card/Card.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'cardList',
  titleModule: { todo: 'populate this object' },
  cards: [CardMock],
  cardStyle: faker.random.word(),
  listStyle: faker.random.word(),
  link: { todo: 'populate this object' }
};
