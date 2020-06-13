import React from 'react';
import propTypes from './SectionCardRows.propTypes';
import Card from '../Card';

function SectionCardRows({ cards }) {
  return (
    <div data-testid="SectionCardRows">
      {cards.map((card) => {
        const {title, summary} = card;
        return <Card title={title} summary={summary} />;
      })}
    </div>
  );
}

SectionCardRows.propTypes = propTypes;

export default SectionCardRows;
