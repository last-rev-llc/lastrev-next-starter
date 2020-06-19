import PropTypes from 'prop-types';

const standardValuePropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
});

const imageValuePropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
});

export default {
  'title': standardValuePropType,
  'description': standardValuePropType,
  'keywords': standardValuePropType,
  'robots': standardValuePropType,
  'og:title': standardValuePropType,
  'og:image': imageValuePropType,
  'og:description': standardValuePropType,
  'twitter:title': standardValuePropType,
  'twitter:image': imageValuePropType,
  'twitter:description': standardValuePropType
};
