import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageOther.module.scss';

export const PageOtherPropTypes = {
  title: PropTypes.string
};

function PageOther({ title }) {
  return (
    <div data-testid="PageOther" className={styles.page_other}>
      <div>Other Page: {title}</div>
    </div>
  );
}
PageOther.propTypes = PageOtherPropTypes;

PageOther.defaultProps = {
  title: null
};

export default PageOther;
