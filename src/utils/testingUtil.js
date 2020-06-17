/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../redux';

/**
 * initialState can be either the global state, if you need the combination of different states,
 * or a scoped state. If scoped, use the second argument to define the scope.
 *
 * Returns a render function that takes the UI to render and an optional state update to use for that render.
 */
export default (initialState = {}, scope) => {
  const override = (newState) => {
    if (scope === undefined) {
      return {
        ...initialState,
        ...newState
      };
    }
    const out = {};
    out[scope] = {
      ...initialState,
      ...newState
    };
    return out;
  };

  const render = (ui, state = {}) => {
    const store = createStore(reducer, override(state), applyMiddleware(thunkMiddleware));
    return {
      ...rtlRender(<Provider store={store}>{ui}</Provider>),
      store
    };
  };

  return render;
};
