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
    const expectedClass = `link_${internalUrl.style} ${testClassName} icon_${_.snakeCase(internalUrl.icon)}`;

    const { getByTestId } = render(
      <ElementLink
        className={testClassName}
        isInternal={internalUrl.isInternal}
        href={internalUrl.href}
        as={internalUrl.as}
        linkText={internalUrl.linkText}
        icon={internalUrl.icon}
        style={internalUrl.style}
      />
    );
    expect(getByTestId('ElementLink').getAttribute('class')).toBe(expectedClass);
  });
  describe('<ElementLink /> isInternal', () => {
    test('href is /[slug] for pageGeneral', () => {
      const { getByTestId } = render(
        <ElementLink
          isInternal={internalUrl.isInternal}
          href={internalUrl.href}
          as={internalUrl.as}
          linkText={internalUrl.linkText}
          icon={internalUrl.icon}
          isModal={internalUrl.isModal}
          isDownload={internalUrl.isDownload}
          trackingId={internalUrl.trackingId}
        />
      );

      expect(getByTestId('ElementLink').getAttribute('href')).toBe(internalUrl.as);
    });
    test('trackingId renders correctly', () => {
      const trackingId = 'testid';
      const { getByTestId } = render(
        <ElementLink
          isInternal={internalUrl.isInternal}
          href={internalUrl.href}
          linkText={internalUrl.linkText}
          target={internalUrl.target}
          icon={internalUrl.icon}
          isModal={internalUrl.isModal}
          isDownload={internalUrl.isDownload}
          trackingId={trackingId}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(trackingId);
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
          isModal={externalUrl.isModal}
          isDownload={externalUrl.isDownload}
          trackingId={externalUrl.trackingId}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(externalUrl.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(externalUrl.target);
    });
    test('trackingId renders correctly', () => {
      const trackingId = 'testid';
      const { getByTestId } = render(
        <ElementLink
          isInternal={externalUrl.isInternal}
          href={externalUrl.href}
          linkText={externalUrl.linkText}
          target={externalUrl.target}
          icon={externalUrl.icon}
          isModal={internalUrl.isModal}
          isDownload={internalUrl.isDownload}
          trackingId={trackingId}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(trackingId);
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
          isModal={false}
          isDownload={false}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(anchorTag.href);
    });
    test('trackingId renders correctly', () => {
      const trackingId = 'testid';
      const { getByTestId } = render(
        <ElementLink
          isInternal={anchorTag.isInternal}
          href={anchorTag.href}
          linkText={anchorTag.linkText}
          target={anchorTag.target}
          icon={anchorTag.icon}
          isModal={anchorTag.isModal}
          isDownload={anchorTag.isDownload}
          trackingId={trackingId}
        />
      );
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(trackingId);
    });
  });
});
