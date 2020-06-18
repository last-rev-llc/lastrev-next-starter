import React from 'react';
import propTypes from './SectionSplitColumn.propTypes';
import styles from './SectionSplitColumn.module.scss';
import mockContent from './SectionSplitColumn.mock';

function SectionSplitColumn({ header, introText }) {
  return (
    <div data-testid="SectionSplitColumn">
      {header ? (
        <div className={styles['header-wrap']}>
          <h1 className={styles.header} data-testid="SectionSplitColumn-header">
            {header}
          </h1>
        </div>
      ) : null}

      {introText ? (
        <div className={styles['intro-text-wrap']}>
          <p className={styles['intro-text']} data-testid="SectionSplitColumn-intro-text">
            {introText}
          </p>
        </div>
      ) : null}
    </div>
  );
}

SectionSplitColumn.propTypes = propTypes;

SectionSplitColumn.defaultProps = mockContent;

export default SectionSplitColumn;
