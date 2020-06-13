import React from 'react';
import propTypes from './GlobalHeader.propTypes';
import styles from './GlobalHeader.module.scss';

function GlobalHeader() {
  return (
    <div data-testid="GlobalHeader">
      Hello Header
    </div>
  );
}

GlobalHeader.propTypes = propTypes;

export default GlobalHeader;
