/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';
import _ from 'lodash';
import propTypes, { standardLinkPropTypes, internalLinkPropTypes } from './ElementLink.propTypes';
import styles from './ElementLink.module.scss';
import getInternalUrl from '../../utils/getInternalUrl';

const StandardLink = ({ target, href, className, linkText }) => {
  return (
    <a className={className} href={href} target={target} rel="noopener noreferrer" data-testid="ElementLink">
      {linkText}
    </a>
  );
};

StandardLink.propTypes = standardLinkPropTypes;

StandardLink.defaultProps = {
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
  className: null,
  as: null
};

const getFullClassName = ({ className, icon }) => {
  return `${styles.link} ${className || ''} icon_${_.snakeCase(icon)}`;
};

function ElementLink({ className, action, internalUrl, externalUrl, anchorTagName, linkText, icon }) {
  let href;
  let as;
  let target;
  let isInternal = false;

  const fullClassName = getFullClassName({ className, icon });

  switch (action) {
    case 'Go to Internal URL':
      if (!internalUrl) throw new Error('internalUrl not selected', internalUrl);
      ({ href, as } = getInternalUrl(internalUrl));
      isInternal = true;
      break;
    case 'Go to External URL':
      if (!externalUrl) throw new Error('externalUrl empty', externalUrl);
      href = externalUrl;
      target = '_blank';
      break;
    case 'Anchor Link':
      if (!anchorTagName) throw new Error('anchorTagName empty', anchorTagName);
      href = `#${anchorTagName}`;
      break;
    default:
      break;
  }

  if (!href) return null;

  return isInternal ? (
    <InternalLink href={href} as={as} className={fullClassName} linkText={linkText} />
  ) : (
    <StandardLink target={target} href={href} className={fullClassName} linkText={linkText} />
  );
}

ElementLink.propTypes = propTypes;

ElementLink.defaultProps = {
  className: null,
  internalUrl: null,
  externalUrl: null,
  anchorTagName: null
};

export default ElementLink;
