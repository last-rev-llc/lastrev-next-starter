import React from 'react';
import propTypes from './GlobalFooter.propTypes';
import styles from './GlobalFooter.module.scss';

function GlobalFooter() {
  return (
    <div data-testid="GlobalFooter">
      Global Footer
    </div>
  );
}

GlobalFooter.propTypes = propTypes;

export default GlobalFooter;
