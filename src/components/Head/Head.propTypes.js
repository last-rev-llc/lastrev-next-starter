import PropTypes from 'prop-types';

export default {
  title: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }),
  description: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }),
  keywords: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })
};
