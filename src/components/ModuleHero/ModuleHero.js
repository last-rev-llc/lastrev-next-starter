import React from 'react';
import propTypes from './ModuleHero.propTypes';
import styles from './ModuleHero.module.scss';
import ElementLink from '../ElementLink';

function ModuleHero({ header, summary, cta }) {
  return (
    <div data-testid="ModuleHero">
      <h1 className={styles.header} data-testid="ModuleHero-header">
        {header}
      </h1>
      <p>{summary}</p>
      <ElementLink url={cta.url} text={cta.text} />
    </div>
  );
}

ModuleHero.propTypes = propTypes;

export default ModuleHero;
