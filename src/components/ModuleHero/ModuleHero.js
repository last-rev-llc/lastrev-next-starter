import React from 'react';
import propTypes from './ModuleHero.propTypes';
import styles from './ModuleHero.module.scss';
import ElementLink from '../ElementLink';

function ModuleHero({ header, summary, cta }) {
  return (
    <div className={styles['module-hero']} data-testid="ModuleHero">
      <div className={styles['module-hero-inner-wrap']}>
        {header ? (
          <div className={styles['header-wrap']}>
            <h1 className={styles.header} data-testid="ModuleHero-header">
              {header}
            </h1>
          </div>
        ) : null}

        {summary ? (
          <div className={styles['summary-wrap']}>
            <p className={styles.summary} data-testid="ModuleHero-summary">
              {summary}
            </p>
          </div>
        ) : null}

        {cta && cta.url && cta.text ? (
          <div className={styles['cta-wrap']}>
            <ElementLink url={cta.url} text={cta.text} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

ModuleHero.propTypes = propTypes;

export default ModuleHero;
