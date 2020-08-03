import faker from 'faker';
import StandardHeroMock from '../StandardHero/StandardHero.mock';
import TextModuleMock from '../TextModule/TextModule.mock';
import HorizontalModuleMock from '../HorizontalModule/HorizontalModule.mock';

export default {
  _id: faker.random.alphaNumeric(10),
  _contentTypeId: 'pageGeneral',
  slug: faker.random.word(),
  content: [StandardHeroMock, TextModuleMock, HorizontalModuleMock],
  pageTitle: faker.random.word()
};
