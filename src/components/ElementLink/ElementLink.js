/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';
import _ from 'lodash';
import PropTypes from 'prop-types';

export const ElementLinkPropTypes = {
  className: PropTypes.string,
  isInternal: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.string,
  target: PropTypes.string
};

const internalLinkPropTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  className: PropTypes.string,
  linkText: PropTypes.string.isRequired
};

const standardLinkPropTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  linkText: PropTypes.string.isRequired
};

const StandardLink = ({ target, href, className, linkText }) => {
  return (
    <a className={className} href={href} target={target} rel="noopener noreferrer" data-testid="ElementLink">
      {linkText}
    </a>
  );
};

StandardLink.propTypes = standardLinkPropTypes;

StandardLink.defaultProps = {
  className: null,
  target: null
};

const InternalLink = ({ href, as, className, linkText }) => {
  return (
    <NextLink href={href} as={as}>
      <a className={className} data-testid="ElementLink">
        {linkText}
      </a>
    </NextLink>
  );
};

InternalLink.propTypes = internalLinkPropTypes;

InternalLink.defaultProps = {
  className: null
};

const getFullClassName = ({ className, icon }) => {
  if (!className && !icon) return null;
  return `${className || ''} icon_${_.snakeCase(icon)}`;
};

function ElementLink({ className, isInternal, href, as, target, linkText, icon }) {
  const fullClassName = getFullClassName({ className, icon });

  if (isInternal) {
    if (!as) throw Error('"as" property not defined');
    return <InternalLink href={href} as={as} className={fullClassName} linkText={linkText} />;
  }
  return <StandardLink target={target} href={href} className={fullClassName} linkText={linkText} />;
}

ElementLink.propTypes = ElementLinkPropTypes;

ElementLink.defaultProps = {
  className: null,
  as: null,
  target: null,
  icon: null
};

export default ElementLink;
