import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ElementNavLink from './ElementNavLink';
import mockContent from './ElementNavLink.mock';

afterEach(() => {
  cleanup();
});

describe('<ElementNavLink />', () => {
  describe('<ElementNavLink /> renders correctly', () => {
    test('Main Nav Link is displayed', () => {
      const { mainLink } = mockContent;
      const { getByTestId } = render(<ElementNavLink mainLink={mainLink} />);
      expect(getByTestId('ElementNavLink-mainLink').textContent).toBe(mainLink.fields.linkText);
    });
    test('No Children links ul is displayed if no children links exist', () => {
      const { mainLink } = mockContent;
      const { queryByTestId } = render(<ElementNavLink mainLink={mainLink} />);
      expect(queryByTestId('ElementNavLink-childrenLinks')).toBe(null);
    });
    test('Children links are displayed correctly if passed in', () => {
      const { mainLink, childrenLinks } = mockContent;
      const { queryByTestId } = render(<ElementNavLink mainLink={mainLink} childrenLinks={childrenLinks} />);
      expect(queryByTestId('ElementNavLink-childrenLinks')).not.toBe(null);
      expect(queryByTestId('ElementNavLink-childrenLinks').childNodes.length).toBe(childrenLinks.length);
      expect(queryByTestId('ElementNavLink-childrenLinks').childNodes[0].textContent).toBe(
        childrenLinks[0].fields.linkText
      );
    });
  });
});
