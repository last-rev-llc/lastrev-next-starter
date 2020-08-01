import faker from 'faker';
import TopNavItemMock from '../TopNavItem/TopNavItem.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'topNavBar',
  logoUrl: faker.random.word(),
  logo: { todo: 'populate this media item' },
  topNavItems: [TopNavItemMock],
  style: faker.random.word()
};
