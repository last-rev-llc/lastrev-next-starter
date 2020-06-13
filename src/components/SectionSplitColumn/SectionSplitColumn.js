import React from 'react';
import propTypes from './SectionSplitColumn.propTypes';
import styles from './SectionSplitColumn.module.scss';
import mockContent from './SectionSplitColumn.mock';

function SectionSplitColumn({ header }) {
  return (
    <div data-testid="SectionSplitColumn">
      <h1 className={styles.header} data-testid="SectionSplitColumn-header">
        {header}
      </h1>
    </div>
  );
}

SectionSplitColumn.propTypes = propTypes;

SectionSplitColumn.defaultProps = mockContent;

export default SectionSplitColumn;
