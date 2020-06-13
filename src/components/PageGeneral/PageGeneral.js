import React from 'react';
import propTypes from './PageGeneral.propTypes';
import styles from './PageGeneral.module.scss';
import mockContent from './PageGeneral.mock';

function PageGeneral({ header }) {
  return (
    <div data-testid="PageGeneral">
      <h1 className={styles.header} data-testid="PageGeneral-header">
        {header}
      </h1>
    </div>
  );
}

PageGeneral.propTypes = propTypes;

PageGeneral.defaultProps = mockContent;

export default PageGeneral;
