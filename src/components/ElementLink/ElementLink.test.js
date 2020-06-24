import React from 'react';
import _ from 'lodash';
import { render, cleanup } from '@testing-library/react';
import ElementLink from './ElementLink';
import { internalUrl, externalUrl, anchorTag } from './ElementLink.mock';

beforeEach(() => {
  jest.spyOn(console, 'error');
  global.console.error.mockImplementation(() => {});
});

afterEach(() => {
  global.console.error.mockRestore();
  cleanup();
});

describe('<ElementLink />', () => {
  test('a tag has correct class attribute', () => {
    const testClassName = 'testClass';
    const expectedClass = `${testClassName} icon_${_.snakeCase(internalUrl.icon)}`;
    const { getByTestId } = render(
      <ElementLink
        className={testClassName}
        isInternal={internalUrl.isInternal}
        href={internalUrl.href}
        as={internalUrl.as}
        linkText={internalUrl.linkText}
        icon={internalUrl.icon}
      />
    );
    expect(getByTestId('ElementLink').getAttribute('class')).toBe(expectedClass);
  });
  describe('<ElementLink /> isInternal', () => {
    test('throws error if as is undefined', () => {
      expect(() => {
        render(
          <ElementLink
            isInternal={internalUrl.isInternal}
            href={internalUrl.href}
            linkText={internalUrl.linkText}
            icon={internalUrl.icon}
          />
        );
      }).toThrow('"as" property not defined');
    });

    test('href is /[slug] for pageGeneral', () => {
      const { getByTestId } = render(
        <ElementLink
          isInternal={internalUrl.isInternal}
          href={internalUrl.href}
          as={internalUrl.as}
          linkText={internalUrl.linkText}
          icon={internalUrl.icon}
        />
      );

      expect(getByTestId('ElementLink').getAttribute('href')).toBe(internalUrl.as);
    });
  });

  describe('<ElementLink /> External URL', () => {
    test('href is externalUrl', () => {
      const { getByTestId } = render(
        <ElementLink
          isInternal={externalUrl.isInternal}
          href={externalUrl.href}
          linkText={externalUrl.linkText}
          target={externalUrl.target}
          icon={externalUrl.icon}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(externalUrl.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(externalUrl.target);
    });
  });

  describe('<ElementLink /> Anchor Link', () => {
    test('href is #anchorTagName', () => {
      const { getByTestId } = render(
        <ElementLink
          isInternal={anchorTag.isInternal}
          href={anchorTag.href}
          linkText={anchorTag.linkText}
          icon={anchorTag.icon}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(anchorTag.href);
    });
  });
});
