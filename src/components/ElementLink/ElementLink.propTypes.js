import PropTypes from 'prop-types';

export default {
  className: PropTypes.string,
  action: PropTypes.string.isRequired,
  internalUrl: PropTypes.shape({
    sys: PropTypes.shape({
      contentType: PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string.isRequired
        })
      })
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    })
  }),
  externalUrl: PropTypes.string,
  anchorTagName: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export const internalLinkPropTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export const standardLinkPropTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};
