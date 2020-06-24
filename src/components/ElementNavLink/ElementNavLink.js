import React from 'react';
import PropTypes from 'prop-types';
import ElementLink, { ElementLinkPropTypes } from '@components/ElementLink';
import styles from './ElementNavLink.module.scss';

export const ElementNavLinkPropTypes = {
  mainLink: PropTypes.shape(ElementLinkPropTypes).isRequired,
  childrenLinks: PropTypes.arrayOf(PropTypes.shape({ ...ElementLinkPropTypes, id: PropTypes.string.isRequired }))
};

function ElementNavLink({ mainLink, childrenLinks }) {
  const { isInternal, href, as, target, linkText, icon } = mainLink;
  return (
    <div data-testid="ElementNavLink">
      <div data-testid="ElementNavLink-mainLink" className={styles.mainNavLink}>
        <ElementLink isInternal={isInternal} href={href} as={as} target={target} linkText={linkText} icon={icon} />
      </div>
      {childrenLinks && childrenLinks.length ? (
        <ul data-testid="ElementNavLink-childrenLinks" className={styles.childrenNavLinks}>
          {childrenLinks.map((link) => {
            const {
              id: childId,
              isInternal: childIsInternal,
              href: childHref,
              as: childAs,
              target: childTarget,
              linkText: childLinkText,
              icon: childIcon
            } = link;
            return (
              <li key={childId}>
                <ElementLink
                  isInternal={childIsInternal}
                  href={childHref}
                  as={childAs}
                  target={childTarget}
                  linkText={childLinkText}
                  icon={childIcon}
                />
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

ElementNavLink.propTypes = ElementNavLinkPropTypes;

ElementNavLink.defaultProps = {
  childrenLinks: null
};

export default ElementNavLink;
