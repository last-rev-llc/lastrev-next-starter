import { ACTION_1, ACTION_2 } from './dummy.types';

export const initialState = {
  value1: null,
  value2: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_1: {
      const { value1 } = payload;
      return {
        ...state,
        value1
      };
    }
    case ACTION_2: {
      const { value2 } = payload;
      return {
        ...state,
        value2
      };
    }
    default:
      return state;
  }
}
