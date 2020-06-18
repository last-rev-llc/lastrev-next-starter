import React from 'react';
import propTypes from './Card.propTypes';
import styles from './Card.module.scss';
import ElementLink from '../ElementLink';
import ElementImage from '../ElementImage';

function Card({ title, summary, cta, img }) {
  return (
    <div data-testid="Card">
      <div className={styles['module-card']}>
        {img && img.src ? (
          <div className={styles['card-img-top-wrap']}>
            <ElementImage src={img.src} alt={img.alt} className="card-img-top" />
          </div>
        ) : null}

      
        {title ? (
          <div className={styles['card-header']}>
            <h5 className={styles['card-title']} data-testid="Card-header">
              {title}
            </h5>
          </div>
        ) : null}

        {summary ? (
          <div className={styles['card-body']}>
            <div className={styles['card-summary-wrap']}>
              <p className={styles['card-text']}>{summary}</p>
            </div>
          </div>
        ) : null}
      
        {cta && cta.url && cta.text ? (
          <div className={styles['card-footer']}>
            <div className={styles['cta-wrap']}>
              <ElementLink url={cta.url} text={cta.text} className={cta.className} />
            </div>
          </div>
      ) : null}
      </div>
    </div>
  );
}

Card.propTypes = propTypes;

export default Card;
