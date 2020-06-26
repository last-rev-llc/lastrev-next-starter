import React from 'react';
import _ from 'lodash';
import { render, cleanup } from '@testing-library/react';
import ElementLink from './ElementLink';
import { internalUrl, externalUrl, anchorTag, mediaDownload } from './ElementLink.mock';

beforeEach(() => {
  jest.spyOn(console, 'error');
  global.console.error.mockImplementation(() => {});
});

afterEach(() => {
  global.console.error.mockRestore();
  cleanup();
});

describe('<ElementLink />', () => {
  describe('<ElementLink /> with an internal URL', () => {
    test('has expected attributes', () => {
      const testClassName = 'testClass';
      const expectedClassNames = [`link_${internalUrl.style}`, testClassName, `icon_${_.snakeCase(internalUrl.icon)}`];

      const { getByTestId } = render(
        <ElementLink
          className={testClassName}
          href={internalUrl.href}
          as={internalUrl.as}
          linkText={internalUrl.linkText}
          target={internalUrl.target}
          icon={internalUrl.icon}
          style={internalUrl.style}
          isModal={internalUrl.isModal}
          download={internalUrl.download}
          trackingId={internalUrl.trackingId}
        />
      );
      expect(getByTestId('ElementLink').textContent).toBe(internalUrl.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(internalUrl.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(internalUrl.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(internalUrl.download);
    });
    test('href /[slug] sets the href attribute correctly', () => {
      const { getByTestId } = render(
        <ElementLink
          href={internalUrl.href}
          as={internalUrl.as}
          linkText={internalUrl.linkText}
          icon={internalUrl.icon}
          isModal={internalUrl.isModal}
          download={internalUrl.download}
          trackingId={internalUrl.trackingId}
        />
      );

      expect(getByTestId('ElementLink').getAttribute('href')).toBe(internalUrl.as);
    });
  });

  describe('<ElementLink /> External URL', () => {
    test('has expected attributes', () => {
      const testClassName = 'testClass';
      const expectedClassNames = [`link_${externalUrl.style}`, testClassName];

      const { getByTestId } = render(
        <ElementLink
          className={testClassName}
          href={externalUrl.href}
          as={externalUrl.as}
          linkText={externalUrl.linkText}
          target={externalUrl.target}
          icon={externalUrl.icon}
          style={externalUrl.style}
          isModal={externalUrl.isModal}
          download={externalUrl.download}
          trackingId={externalUrl.trackingId}
        />
      );
      expect(getByTestId('ElementLink').textContent).toBe(externalUrl.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(externalUrl.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(externalUrl.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(externalUrl.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(externalUrl.download);
    });
  });

  describe('<ElementLink /> Anchor Link', () => {
    test('has expected attributes', () => {
      const testClassName = 'testClass';
      const expectedClassNames = [`link_${anchorTag.style}`, testClassName, `icon_${_.snakeCase(anchorTag.icon)}`];

      const { getByTestId } = render(
        <ElementLink
          className={testClassName}
          href={anchorTag.href}
          as={anchorTag.as}
          linkText={anchorTag.linkText}
          target={anchorTag.target}
          icon={anchorTag.icon}
          style={anchorTag.style}
          isModal={anchorTag.isModal}
          download={anchorTag.download}
          trackingId={anchorTag.trackingId}
        />
      );
      expect(getByTestId('ElementLink').textContent).toBe(anchorTag.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(anchorTag.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(anchorTag.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(anchorTag.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(anchorTag.download);
    });
  });
  describe('<ElementLink /> Media download', () => {
    test('has expected attributes', () => {
      const testClassName = 'testClass';
      const expectedClassNames = [`link_${mediaDownload.style}`, testClassName];
      const { getByTestId } = render(
        <ElementLink
          className={testClassName}
          href={mediaDownload.href}
          as={mediaDownload.as}
          linkText={mediaDownload.linkText}
          target={mediaDownload.target}
          icon={mediaDownload.icon}
          style={mediaDownload.style}
          isModal={mediaDownload.isModal}
          download={mediaDownload.download}
          trackingId={mediaDownload.trackingId}
        />
      );
      expect(getByTestId('ElementLink').textContent).toBe(mediaDownload.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(mediaDownload.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(mediaDownload.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(mediaDownload.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(mediaDownload.download);
    });
  });
});
