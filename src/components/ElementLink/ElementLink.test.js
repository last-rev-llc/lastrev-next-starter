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
    const expectedClass = `link ${testClassName} icon_${_.snakeCase(internalUrl.icon)}`;
    const { getByTestId } = render(
      <ElementLink
        className={testClassName}
        action={internalUrl.action}
        internalUrl={internalUrl.internalUrl}
        linkText={internalUrl.linkText}
        icon={internalUrl.icon}
      />
    );
    expect(getByTestId('ElementLink').getAttribute('class')).toBe(expectedClass);
  });
  describe('<ElementLink /> action: Go to Internal Url', () => {
    test('throws error if internalUrl is undefined', () => {
      expect(() => {
        render(<ElementLink action={internalUrl.action} linkText={internalUrl.linkText} icon={internalUrl.icon} />);
      }).toThrow('internalUrl not selected');
    });

    test('href is /[slug] for pageGeneral', () => {
      const { getByTestId } = render(
        <ElementLink
          action={internalUrl.action}
          internalUrl={internalUrl.internalUrl}
          linkText={internalUrl.linkText}
          icon={internalUrl.icon}
        />
      );
      const {
        internalUrl: {
          url: { as }
        }
      } = internalUrl;
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(as);
    });
  });

  describe('<ElementLink /> action: Go to External URL', () => {
    test('throws error if externalUrl is undefined', () => {
      expect(() => {
        render(<ElementLink action={externalUrl.action} linkText={externalUrl.linkText} icon={externalUrl.icon} />);
      }).toThrow('externalUrl empty');
    });
    test('href is externalUrl', () => {
      const { getByTestId } = render(
        <ElementLink
          action={externalUrl.action}
          externalUrl={externalUrl.externalUrl}
          linkText={externalUrl.linkText}
          icon={externalUrl.icon}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(externalUrl.externalUrl);
    });
    test('target set to _blank', () => {
      const { getByTestId } = render(
        <ElementLink
          action={externalUrl.action}
          externalUrl={externalUrl.externalUrl}
          linkText={externalUrl.linkText}
          icon={externalUrl.icon}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('target')).toBe('_blank');
    });
  });

  describe('<ElementLink /> action: Anchor Link', () => {
    test('throws error if anchorTagName is undefined', () => {
      expect(() => {
        render(<ElementLink action={anchorTag.action} linkText={anchorTag.linkText} icon={anchorTag.icon} />);
      }).toThrow('anchorTagName empty');
    });
    test('href is #anchorTagName', () => {
      const { getByTestId } = render(
        <ElementLink
          action={anchorTag.action}
          anchorTagName={anchorTag.anchorTagName}
          linkText={anchorTag.linkText}
          icon={anchorTag.icon}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(`#${anchorTag.anchorTagName}`);
    });
  });
});
