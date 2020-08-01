import faker from 'faker';
import ElementLinkMock from '../ElementLink/ElementLink.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'localePickerSubmodule',
  languageLinks: [ElementLinkMock],
  country: faker.random.word()
};
