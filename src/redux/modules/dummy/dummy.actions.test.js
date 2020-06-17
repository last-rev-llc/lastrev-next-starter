import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { takeAction1, takeAction2 } from './dummy.actions';

import { initialState } from './dummy.reducer';
import * as t from './dummy.types';

const mockStore = configureMockStore([thunk]);

describe('Dummy Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dummy: initialState
    });
  });

  describe('takeAction1 creator', () => {
    it('dispatches value1 action', async () => {
      const mockValue = 'test1';

      await store.dispatch(takeAction1({ value1: mockValue }));
      const actions = store.getActions();
      expect(actions[0].type).toEqual(t.ACTION_1);
      expect(actions[0].payload).toMatchObject({
        value1: mockValue
      });
    });
  });
  describe('takeAction2 creator', () => {
    it('dispatches value2 action', async () => {
      const mockValue = 'test2';

      await store.dispatch(takeAction2({ value2: mockValue }));
      const actions = store.getActions();
      expect(actions[0].type).toEqual(t.ACTION_2);
      expect(actions[0].payload).toMatchObject({
        value2: mockValue
      });
    });
  });
});
