import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopNavBar.module.scss';
import { TopNavItemPropTypes } from '../TopNavItem';
import { AssetPropTypes } from '../Asset';

export const TopNavBarPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  logo: PropTypes.shape(AssetPropTypes).isRequired,
  topNavItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(TopNavItemPropTypes)])),
  style: PropTypes.string.isRequired
};

function TopNavBar({ _id, _contentTypeId, logoUrl, logo, topNavItems, style }) {
  return (
    <div data-testid="TopNavBar" className={styles.top_nav_bar}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>logoUrl</h2>
        <pre>{JSON.stringify(logoUrl, null, 2)}</pre>
      </div>
      <div>
        <h2>logo</h2>
        <pre>{JSON.stringify(logo, null, 2)}</pre>
      </div>
      <div>
        <h2>topNavItems</h2>
        <pre>{JSON.stringify(topNavItems, null, 2)}</pre>
      </div>
      <div>
        <h2>style</h2>
        <pre>{JSON.stringify(style, null, 2)}</pre>
      </div>
    </div>
  );
}
TopNavBar.propTypes = TopNavBarPropTypes;

TopNavBar.defaultProps = {
  topNavItems: null
};

export default TopNavBar;
