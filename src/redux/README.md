# How to use Redux and Redux Form in this project

## Overview

We will use [Redux](https://redux.js.org/) to manage global state within the learn.dropbox.com site. For forms, we will use [Redux Form](https://redux-form.com/8.3.0/). To allow for asynchronous actions, we will use [Thunk Middleware](https://github.com/reduxjs/redux-thunk).

## Setup

In `_app.js`, some set initial setup is needed in order to hook everything up.

1. Import the necessary exports from the `react-redux`, `next-redux-wrapper`, `redux`, and `redux-thunk` modules.

```javascript
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
```

2. Import our custom reducer (see the Reducers section below).

```javascript
import reducer from '../redux';
```

3. Define our `makeStore` function that we will pass to the `next-redux-wrapper`. In this function, we create the store, passing in our reducer, the initial state, and apply the thunk middleware.

```javascript
const makeStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};
```

4. Wrap our main Component with the Provider from `react-redux`.

```javascript
function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
```

5. Wrap the app with the `next-redux-wrapper`.

```javascript
export default withRedux(makeStore)(MyApp);
```

## Reducers

Redux works by creating multiple reducers that are combined and then passed into your app. A reducer is a function that determines changes to an application’s state. By having separate reducers, we can keep business concerns separate.

### File Organization

For clarity, we have separated out the actions, types, and reducer for each business area into it's own module. These will be in a directory located at `redux/modules/{modulename}`. Within this directory, there will be types, actions, reducer, mock, test files, plus an index file which exports all the actions, and default exports the reducer.

All the reducers are then aggregated at `redux/index.js` where they are combined, along with any 3rd party reducers and exported as the default export.

### Examples

Here we will walk through an example of a typical reducer/action/type module.

1. Action Types. These are located at `redux/modules/{modulename}/{modulemame}.types.js`. Action types are the string constants that the reducer keys on to determine its behavior. These follow this pattern: `{projectname}/{modulename}/{actionname}`.

```javascript
const prefix = 'learn.dropbox.com/locale';

export const LOAD = `${prefix}/LOAD`;
export const CHANGE = `${prefix}/CHANGE`;
```

2. Reducer and initial state. These are located at `redux/modules/{modulename}/{modulemame}.reducer.js`. The initial state defines the shape of the state and sets the initial values that will be used out of the box when no other state changes have happened. The reducer is called whenever an event triggering an app state change happens. Typically a switch statement is used to capture only actions that we are interested in. The actions passes two fields to the reducer, type and payload. Type is used to determine the desired behavior, and payload is the data being returned from our action. From the reducer, we return the updated state. A typical pattern is to return a copy of the current state, merged with any changes from the action. The reducer is always the default export of the module.

```javascript
import { LOAD, CHANGE, ERROR } from './locale.types';

// Initial State
const initialState = {
  value: 'en-US',
  availableLocales: [],
  error: false
};

// Reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD:
      return {
        ...state,
        value: payload.current,
        availableLocales: payload.available,
        error: false
      };
    case CHANGE:
      return {
        ...state,
        value: payload,
        error: false
      };
    case ERROR:
      return {
        ...initialState,
        error: true
      };
    default:
      return state;
  }
}
```

3. The Actions. These are located at `redux/modules/{modulename}/{modulemame}.actions.js`. Here we define and export each of our action creators that will be triggered from user actions in our application. Using thunk middleware, we are able to call 3rd party services asynchronously if needed.

```javascript
import { LOAD, CHANGE, ERROR } from './locale.types';
import locales from './locale.mock';

export const loadCurrentLocale = () => {
  return async (dispatch) => {
    const locale = await cookieReader.get('locale');
    const locales = await localeService.getAvailableLocales();
    return dispatch({
      type: LOAD,
      payload: {
        current: locale || 'en-US',
        available: locales
      }
    });
  };
};

export const changeCurrentLocale = (val) => {
  return async (dispatch) => {
    const result = await localeService.switch(val);

    if (result.error) {
      return dispatch({
        type: ERROR
      });
    }
    return dispatch({
      type: CHANGE,
      payload: val
    });
  };
};
```

4. TODO: discuss tests/mocks

### The Combined Reducer

In our combined reducer, located at `redux/index.js`, we combine all of our reducers, along with any 3rd party reducers, and export the combined reducer.

```javascript
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import user from './modules/user';
import locale from './modules/locale';
import eventregistration from './modules/eventregistration';

export default combineReducers({
  user,
  locale,
  eventregistration,
  form
});
```

## React Modules

In the react modules, we will wire in user actions to trigger our action creators we defined above.

1. Import `connect` from `react-redux`, and some components from the `redux-form module`, along with the action creators we will be calling.

```javascript
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser, logoutUser } from '../../redux/modules/user';
```

2. If we want our component to have access to any of the variables from our state, we define a `mapStateToProps` function. This will be passed to the `connect` wrapper which will ensure that these properties are available in the `props` argument of our component function.

```javascript
const mapStateToProps = (state) => {
  return {
    loggedIn : state.user.loggedIn
    email : state.user.email
  };
};
```

3. Define a `mapDispatchToProps` object that will pass our action creators to the component. This will be passed to the `connect` wrapper which will ensure that these action creators are available in the `props` argument of our component function. If we want to use any of the event handlers from `redux-form`, we wire those in here as well. The `redux-form` handlers get a `values` object passed to them with all the values from the form.

```javascript
const mapDispatchToProps = {
  logout: logoutUser,
  onSubmit: (values) => loginUser(values.email, values.password)
};
```

4. Define the component. All the properties and action creators from the previous two functions will be passed in the `props` object as the first argument to the component function, along with whatever state and actions we will be using from `redux-form`.

```javascript
const LoginForm = ({ handleSubmit, email, loggedIn, logout, pristine, submitting }) => {
  Return();
  //... component code here.
};
```

5. Wrap the component twice. First, we wrap it with `reduxForm`, passing in a unique name for the form, then we react it with `connect`, passing in our `mapStateToProps` and `mapDispatchToProps` objects.

```javascript
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'TestReduxForm'
  })(LoginForm)
);
```

## Live Example

There is a working example that can be reached when running the app, at `/login`. In this example, if you type in the correct email/password combination (`jmcclane@nypd.gov`, `ih8gruber!`) the user will be "logged in". if not, an error message will appear.
