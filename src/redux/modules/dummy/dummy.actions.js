/* eslint-disable camelcase */
import _ from 'lodash';
import { ACTION_1, ACTION_2 } from './dummy.types';

export const takeAction1 = ({ value1 }) => {
  return async (dispatch) => {
    return dispatch({
      type: ACTION_1,
      payload: {
        value1
      }
    });
  };
};

export const takeAction2 = ({ value2 }) => {
  return async (dispatch) => {
    return dispatch({
      type: ACTION_2,
      payload: {
        value2
      }
    });
  };
};
