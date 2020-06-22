/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PageGeneral from './PageGeneral';
import mockContent from './PageGeneral.mock';
import lookupComponentByContentType from '../../utils/lookupComponentByContentType';

jest.mock('../../utils/lookupComponentByContentType', () => () => {
  return 'div';
});

afterEach(() => {
  cleanup();
});

describe('<PageGeneral />', () => {
  describe('<PageGeneral /> renders correctly', () => {
    test('Page renders correctly with no pageHero and no modules', () => {
      const { pageTitle } = mockContent;
      const { queryByTestId } = render(<PageGeneral pageTitle={pageTitle} />);
      expect(queryByTestId('PageGeneral-pageTitle')).not.toBe(null);
      expect(queryByTestId('PageGeneral-pageTitle').textContent).toBe(pageTitle);
      expect(queryByTestId('PageGeneral-moduleHero')).toBe(null);
      expect(queryByTestId('PageGeneral-modules')).toBe(null);
    });
    test('Page renders correctly with pageHero and no modules', () => {
      const { pageTitle, pageHero } = mockContent;
      const { queryByTestId } = render(<PageGeneral pageTitle={pageTitle} pageHero={pageHero} />);
      expect(queryByTestId('PageGeneral-pageTitle')).toBe(null);
      expect(queryByTestId('PageGeneral-moduleHero')).not.toBe(null);
      expect(queryByTestId('PageGeneral-modules')).toBe(null);
    });
    test('Page renders modules correctly', () => {
      const { pageTitle, modules } = mockContent;
      const { queryByTestId } = render(<PageGeneral pageTitle={pageTitle} modules={modules} />);
      expect(queryByTestId('PageGeneral-modules')).not.toBe(null);
      expect(queryByTestId('PageGeneral-modules').childNodes.length).toBe(modules.length);
    });
  });
});
