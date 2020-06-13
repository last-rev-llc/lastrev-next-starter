import React from 'react';
import propTypes from './ModuleRichText.propTypes';
import styles from './ModuleRichText.module.scss';
import mockContent from './ModuleRichText.mock';

function ModuleRichText({ header }) {
  return (
    <div data-testid="ModuleRichText">
      <h1 className={styles.header} data-testid="ModuleRichText-header">
        {header}
      </h1>
    </div>
  );
}

ModuleRichText.propTypes = propTypes;

ModuleRichText.defaultProps = mockContent;

export default ModuleRichText;
