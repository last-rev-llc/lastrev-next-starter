import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubnavCard.module.scss';
import { ElementLinkPropTypes } from '../ElementLink';

export const SubnavCardPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  primaryLink: PropTypes.shape(ElementLinkPropTypes).isRequired,
  introText: PropTypes.string.isRequired,
  secondaryLinks: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])),
  subNavCardStyle: PropTypes.string.isRequired
};

function SubnavCard({ _id, _contentTypeId, primaryLink, introText, secondaryLinks, subNavCardStyle }) {
  return (
    <div data-testid="SubnavCard" className={styles.subnav_card}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>primaryLink</h2>
        <pre>{JSON.stringify(primaryLink, null, 2)}</pre>
      </div>
      <div>
        <h2>introText</h2>
        <pre>{JSON.stringify(introText, null, 2)}</pre>
      </div>
      <div>
        <h2>secondaryLinks</h2>
        <pre>{JSON.stringify(secondaryLinks, null, 2)}</pre>
      </div>
      <div>
        <h2>subNavCardStyle</h2>
        <pre>{JSON.stringify(subNavCardStyle, null, 2)}</pre>
      </div>
    </div>
  );
}
SubnavCard.propTypes = SubnavCardPropTypes;

SubnavCard.defaultProps = {
  secondaryLinks: null
};

export default SubnavCard;
