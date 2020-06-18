import React from 'react';
import propTypes from './SectionCardRows.propTypes';
import styles from './SectionCardRows.module.scss';
import Card from '../Card';

function SectionCardRows({ cards }) {
  return (
    <div data-testid="SectionCardRows">
      <div className={styles['section-card-container']}>
        <div className={styles['section-card-row']} data-cols-per-row={columnsPerRow}>
          {cards.map((card) => {
            const {title, summary} = card;
            return (
              <div className={styles['section-card-col']}>
                <Card title={title} summary={summary} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

SectionCardRows.propTypes = propTypes;

export default SectionCardRows;
