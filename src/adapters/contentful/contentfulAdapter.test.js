import Adapter from './contentfulAdapter';
import mockContent from './contentfulAdapter.mock';

describe('Contentful Adapter', () => {
  it('converts the data correctly', () => {
    const urlMap = {
      pageGeneral: {
        url: '/[key]',
        key: 'slug'
      }
    };
    const out = Adapter({ urlMap })(mockContent);
    expect(out).toMatchSnapshot();
  });
});
