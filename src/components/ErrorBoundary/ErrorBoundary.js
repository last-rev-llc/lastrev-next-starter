import React from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/react';

export const ErrorBoundaryPropTypes = {
  children: PropTypes.node.isRequired
};

function FallbackComponent() {
  return <div>An error has occured</div>;
}
// TODO only show dialog on staging
function ErrorBoundary({ children }) {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      {children}
    </Sentry.ErrorBoundary>
  );
}

ErrorBoundary.propTypes = ErrorBoundaryPropTypes;

export default ErrorBoundary;
