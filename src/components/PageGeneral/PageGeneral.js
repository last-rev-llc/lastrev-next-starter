import React from 'react';
import propTypes from './PageGeneral.propTypes';
import styles from './PageGeneral.module.scss';
import ContentModule from '../ContentModule';
import ModuleHero from '../ModuleHero';

const PageGeneral = ({ modules, pageTitle, pageHero }) => {
  return (
    <div className={styles.pageGeneral}>
      {pageHero ? (
        <div data-testid="PageGeneral-moduleHero">
          <ModuleHero className={styles.moduleHero} {...pageHero.fields} />
        </div>
      ) : (
        <h1 data-testid="PageGeneral-pageTitle" className={styles.pageTitle}>
          {pageTitle}
        </h1>
      )}
      {modules && modules.length ? (
        <div data-testid="PageGeneral-modules">
          {modules.map((module) => (
            <ContentModule key={module.sys.id} contentTypeId={module.sys.contentType.sys.id} fields={module.fields} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

PageGeneral.propTypes = propTypes;

PageGeneral.defaultProps = {
  pageTitle: null,
  pageHero: null,
  modules: null
};

export default PageGeneral;
