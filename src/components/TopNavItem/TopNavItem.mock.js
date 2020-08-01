import faker from 'faker';
import SubnavCardMock from '../SubnavCard/SubnavCard.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'topNavItem',
  subnavCards: [SubnavCardMock],
  title: { todo: 'populate this object' }
};
