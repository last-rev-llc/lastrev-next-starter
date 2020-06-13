import React from 'react';
import propTypes from './ModuleHero.propTypes';
import styles from './ModuleHero.module.scss';
import ElementLink from '../ElementLink';
import mockLink from '../ElementLink/ElementLink.mock';

function ModuleHero({ header, summary }) {
  return (
    <div data-testid="ModuleHero">
      <h1 className={styles.header} data-testid="ModuleHero-header">
        {header}
      </h1>
      <p>{summary}</p>
      <ElementLink {...mockLink} />
    </div>
  );
}

ModuleHero.propTypes = propTypes;

export default ModuleHero;
