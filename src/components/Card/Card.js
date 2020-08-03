import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import sidekick from '../../utils/sidekick';
import { ElementLinkPropTypes } from '../ElementLink';
import { AssetPropTypes } from '../Asset';
import ErrorBoundary from '../ErrorBoundary';

export const CardPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  linkedContent: PropTypes.shape(ElementLinkPropTypes).isRequired,
  headerText: PropTypes.string,
  subhead: PropTypes.string,
  supportingText: PropTypes.string,
  media: PropTypes.shape(AssetPropTypes),
  url: PropTypes.string
};

function Card({ _id, linkedContent, headerText, subhead, supportingText, media, url }) {
  try {
    return (
      <ErrorBoundary>
        <a
          className={styles.card}
          // eslint-disable-next-line react/jsx-props-no-spreading
          href={url || linkedContent._href}
          data-testid="Card">
          <div {...sidekick(_id, 'media')}>
            <img src={media.url} alt={media.title} />
          </div>
          <div>
            {headerText ? <h3 {...sidekick(_id, 'headerText')}>{headerText}</h3> : null}
            {subhead ? <div {...sidekick(_id, 'subhead')}>{subhead}</div> : null}
            {supportingText ? <ul {...sidekick(_id, 'supportingText')}>{supportingText}</ul> : null}
          </div>
        </a>
      </ErrorBoundary>
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}
Card.propTypes = CardPropTypes;

Card.defaultProps = {
  headerText: null,
  subhead: null,
  supportingText: null,
  media: null,
  url: null
};

export default Card;
