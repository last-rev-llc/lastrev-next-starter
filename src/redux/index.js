import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import * as reducers from './modules';

export default combineReducers({
  ...reducers,
  form
});
