import React from 'react';
import propTypes from './ElementNavLink.propTypes';
import styles from './ElementNavLink.module.scss';
import ElementLink from '../ElementLink';

function ElementNavLink({ mainLink, childrenLinks }) {
  return (
    <div data-testid="ElementNavLink">
      <div data-testid="ElementNavLink-mainLink" className={styles.mainNavLink}>
        <ElementLink {...mainLink.fields} />
      </div>
      {childrenLinks && childrenLinks.length ? (
        <ul data-testid="ElementNavLink-childrenLinks" className={styles.childrenNavLinks}>
          {childrenLinks.map((link) => (
            <li key={link.sys.id}>
              <ElementLink {...link.fields} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

ElementNavLink.propTypes = propTypes;

ElementNavLink.defaultProps = {
  childrenLinks: null
};

export default ElementNavLink;
