import Adapter from './contentfulAdapter';
import mockContent from './contentfulAdapter.mock';

const urlMap = {
  pageGeneral: {
    url: '/[key]',
    key: 'slug'
  }
};

const transform = Adapter({ urlMap, linkContentType: 'uieCta' });

describe('Contentful Adapter', () => {
  it('converts the data correctly', () => {
    const out = transform(mockContent);
    expect(out).toMatchSnapshot();
  });
});