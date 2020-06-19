import PropTypes from 'prop-types';
import moduleHeroPropTypes from '../ModuleHero/ModuleHero.propTypes';

export default {
  pageTitle: PropTypes.string.isRequired,
  pageHero: PropTypes.shape({
    fields: PropTypes.shape(moduleHeroPropTypes).isRequired
  }),
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      sys: PropTypes.shape({
        contentType: PropTypes.shape({
          sys: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
        }).isRequired,
        id: PropTypes.string.isRequired
      }).isRequired,
      fields: PropTypes.object.isRequired
    })
  )
};
