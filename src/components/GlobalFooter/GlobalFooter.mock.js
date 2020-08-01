import faker from 'faker';
import ElementLinkMock from '../ElementLink/ElementLink.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'globalFooter',
  column1Header: faker.random.word(),
  column2Header: faker.random.word(),
  column3Header: faker.random.word(),
  column4Links: [ElementLinkMock],
  copyright: faker.random.word(),
  utilityNavs: [ElementLinkMock],
  socialLink: [ElementLinkMock],
  column3Links: [ElementLinkMock],
  column4Header: faker.random.word(),
  column1Links: [ElementLinkMock],
  logoUrl: faker.random.word(),
  column2Links: [ElementLinkMock],
  logo: { todo: 'populate this media item' },
  style: faker.random.word()
};
