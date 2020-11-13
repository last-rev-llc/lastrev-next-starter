import { map, get } from 'lodash';
import PageLanding from './PageLanding';
import PageOther from './PageOther';

// Note: this registry to be updated when a new "page" content item is added.
const registry = {
  // IDs should never change once published.
  '1': {
    name: 'Landing Page', // this allows the user-friendly names to be changed later
    cmp: PageLanding
  },
  '2': {
    name: 'Other Page',
    cmp: PageOther
  }
};

export const list = () => {
  return map(registry, (v, k) => {
    return {
      id: k,
      name: v.name
    };
  });
};

export const getComponent = (id) => {
  return get(registry, `['${id}'].cmp`);
};
