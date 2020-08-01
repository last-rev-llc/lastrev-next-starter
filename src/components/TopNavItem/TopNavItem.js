import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopNavItem.module.scss';
import { SubnavCardPropTypes } from '../SubnavCard';
import { ElementLinkPropTypes } from '../ElementLink';

export const TopNavItemPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  subnavCards: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(SubnavCardPropTypes)])),
  title: PropTypes.shape(ElementLinkPropTypes).isRequired
};

function TopNavItem({ _id, _contentTypeId, subnavCards, title }) {
  return (
    <div data-testid="TopNavItem" className={styles.top_nav_item}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>subnavCards</h2>
        <pre>{JSON.stringify(subnavCards, null, 2)}</pre>
      </div>
      <div>
        <h2>title</h2>
        <pre>{JSON.stringify(title, null, 2)}</pre>
      </div>
    </div>
  );
}
TopNavItem.propTypes = TopNavItemPropTypes;

TopNavItem.defaultProps = {
  subnavCards: null
};

export default TopNavItem;
