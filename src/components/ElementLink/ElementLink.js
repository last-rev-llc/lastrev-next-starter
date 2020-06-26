/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import _ from 'lodash';
import PropTypes from 'prop-types';

export const ElementLinkPropTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.string,
  target: PropTypes.string,
  isModal: PropTypes.bool.isRequired,
  download: PropTypes.bool.isRequired,
  trackingId: PropTypes.string,
  style: PropTypes.string
};

const NextLinkPropTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  trackingId: PropTypes.string
};

const StandardLinkPropTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  isModal: PropTypes.bool.isRequired,
  download: PropTypes.bool.isRequired,
  trackingId: PropTypes.string
};

const StandardLink = ({ target, href, className, linkText, isModal, download, trackingId }) => {
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
      download={download}>
      {linkText}
    </a>
  );
};

StandardLink.propTypes = StandardLinkPropTypes;

StandardLink.defaultProps = {
  className: null,
  target: null,
  trackingId: null
};

const NextLink = ({ href, as, className, linkText, trackingId }) => {
  return (
    <Link href={href} as={as}>
      <a className={className} data-testid="ElementLink" data-trackingid={trackingId}>
        {linkText}
      </a>
    </Link>
  );
};

NextLink.propTypes = NextLinkPropTypes;

NextLink.defaultProps = {
  className: null,
  as: null,
  trackingId: null
};

const getFullClassName = ({ style, className, icon }) => {
  if (!style && !className && !icon) return null;
  return `${style ? `link_${style}` : ''} ${className || ''} ${icon ? `icon_${_.snakeCase(icon)}` : ''}`;
};

function ElementLink({ className, href, as, target, linkText, icon, isModal, download, trackingId, style }) {
  const fullClassName = getFullClassName({ style, className, icon });

  // TODO: is this enough of a check? Someone could pass in
  // my.website.com/something, and this should be handled
  const isInternal = href.startsWith('/');
  const isTargetSelf = !target || target === '_self';

  // if the window should change URl without refreshing the page,
  // use Next/Link
  const useNextLink = isInternal && !download && !isModal && isTargetSelf;

  if (useNextLink) {
    return <NextLink href={href} as={as} className={fullClassName} linkText={linkText} trackingId={trackingId} />;
  }

  return (
    <StandardLink
      target={target}
      href={href}
      className={fullClassName}
      linkText={linkText}
      isModal={isModal}
      download={download}
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
