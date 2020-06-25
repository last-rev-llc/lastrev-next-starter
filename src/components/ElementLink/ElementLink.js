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
  target: PropTypes.string,
  isModal: PropTypes.bool.isRequired,
  isDownload: PropTypes.bool.isRequired,
  trackingId: PropTypes.string,
  style: PropTypes.string
};

const internalLinkPropTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  trackingId: PropTypes.string
};

const standardLinkPropTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  isModal: PropTypes.bool.isRequired,
  isDownload: PropTypes.bool.isRequired,
  trackingId: PropTypes.string
};

const StandardLink = ({ target, href, className, linkText, isModal, isDownload, trackingId }) => {
  let onClick = null;

  if (isModal) {
    onClick = () => {
      // TODO: handle opening modal
    };
  }

  return (
    <a
      data-trackingid={trackingId}
      onClick={onClick}
      className={className}
      href={href}
      target={target}
      rel="noopener noreferrer"
      data-testid="ElementLink"
      download={isDownload}>
      {linkText}
    </a>
  );
};

StandardLink.propTypes = standardLinkPropTypes;

StandardLink.defaultProps = {
  className: null,
  target: null,
  trackingId: null
};

const InternalLink = ({ href, as, className, linkText, trackingId }) => {
  return (
    <NextLink href={href} as={as}>
      <a className={className} data-testid="ElementLink" data-trackingid={trackingId}>
        {linkText}
      </a>
    </NextLink>
  );
};

InternalLink.propTypes = internalLinkPropTypes;

InternalLink.defaultProps = {
  className: null,
  as: null,
  trackingId: null
};

const getFullClassName = ({ style, className, icon }) => {
  if (!style && !className && !icon) return null;
  return `${style ? `link_${style}` : ''} ${className || ''} ${icon ? `icon_${_.snakeCase(icon)}` : ''}`;
};

function ElementLink({
  className,
  isInternal,
  href,
  as,
  target,
  linkText,
  icon,
  isModal,
  isDownload,
  trackingId,
  style
}) {
  const fullClassName = getFullClassName({ style, className, icon });

  if (isInternal) {
    return <InternalLink href={href} as={as} className={fullClassName} linkText={linkText} trackingId={trackingId} />;
  }
  return (
    <StandardLink
      target={target}
      href={href}
      className={fullClassName}
      linkText={linkText}
      isModal={isModal}
      isDownload={isDownload}
      trackingId={trackingId}
    />
  );
}

ElementLink.propTypes = ElementLinkPropTypes;

ElementLink.defaultProps = {
  className: null,
  as: null,
  target: null,
  icon: null,
  trackingId: null,
  style: null
};

export default ElementLink;
