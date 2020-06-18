import PropTypes from 'prop-types';
import ElementLinkPropType from '../ElementLink/ElementLink.propTypes';

export default {
  mainLink: PropTypes.shape({
    fields: PropTypes.shape(ElementLinkPropType)
  }).isRequired,
  childrenLinks: PropTypes.arrayOf(
    PropTypes.shape({
      sys: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired,
      fields: PropTypes.shape(ElementLinkPropType).isRequired
    })
  )
};
