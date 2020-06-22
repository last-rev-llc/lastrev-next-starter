/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import lookupComponentByContentType from '../../utils/lookupComponentByContentType';
import ContentModule from './ContentModule';

jest.mock('../../utils/lookupComponentByContentType', () => () => {
  return 'div';
});

afterEach(() => {
  cleanup();
});

describe('<ContentModule/>', () => {
  describe('<ContentModule/> renders content correctly', () => {
    const fields = { className: 'test' };
    it('renders module passing in the correct fields', () => {
      const { container } = render(<ContentModule contentTypeId="moduleCadGeneral" fields={fields} />);

      expect(container.querySelector('div.test')).not.toBe(null);
    });
  });
});
