/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { createWrapper } from 'next-redux-wrapper';
// import thunkMiddleware from 'redux-thunk';
// import reducer from '../redux';

/*

next-redux-wrapper is throwing some kind of invalid hook error
needs to be resolved before we can use it.
Everything commented our for now.

*/

import '../styles/global.scss';

// // create a makeStore function
// const makeStore = (initialState) => createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
// const wrapper = createWrapper(makeStore, { debug: true });

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps /* , store */ }) {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};

// This default export is required in a new `pages/_app.js` file.
// export default wrapper.withRedux(makeStore)(MyApp);
export default MyApp;
