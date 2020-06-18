import React from 'react';
import propTypes from './ContentModule.propTypes';
import styles from './ContentModule.module.scss';
import mockContent from './ContentModule.mock';

function ContentModule({ header }) {
  return (
    <div data-testid="ContentModule">
      <h1 className={styles.header} data-testid="ContentModule-header">
        {header}
      </h1>
    </div>
  );
}

ContentModule.propTypes = propTypes;

ContentModule.defaultProps = mockContent;

export default ContentModule;
