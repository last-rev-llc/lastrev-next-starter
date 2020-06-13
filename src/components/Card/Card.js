import React from 'react';
import propTypes from './Card.propTypes';
import styles from './Card.module.scss';

function Card({ title, summary }) {
  return (
    <div data-testid="Card">
      <h1 className={styles.header} data-testid="Card-header">
        {title}
      </h1>
      <p>{summary}</p>
    </div>
  );
}

Card.propTypes = propTypes;

export default Card;
