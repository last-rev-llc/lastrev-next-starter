import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageLanding.module.scss';

export const PageLandingPropTypes = {
  title: PropTypes.string
};

function PageLanding({ title }) {
  return (
    <div data-testid="PageLanding" className={styles.page_landing}>
      <div>Landing Page: {title}</div>
    </div>
  );
}
PageLanding.propTypes = PageLandingPropTypes;

PageLanding.defaultProps = {
  title: null
};

export default PageLanding;
