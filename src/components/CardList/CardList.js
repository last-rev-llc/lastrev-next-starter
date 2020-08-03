import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardList.module.scss';
import Card, { CardPropTypes } from '../Card';
import TextModule, { TextModulePropTypes } from '../TextModule';
import { ElementLinkPropTypes } from '../ElementLink';
import sidekick from '../../utils/sidekick';

export const CardListPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  titleModule: PropTypes.shape(TextModulePropTypes),
  cards: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(CardPropTypes)])).isRequired,
  cardStyle: PropTypes.string.isRequired,
  listStyle: PropTypes.string.isRequired,
  link: PropTypes.shape(ElementLinkPropTypes)
};

function CardList({ _id, _contentTypeId, titleModule, cards, cardStyle, listStyle, link }) {
  return (
    <div data-testid="CardList" className={styles.card_list}>
      {titleModule ? (
        <TextModule
          _id={titleModule._id}
          textJustification={titleModule.textJustification}
          link={titleModule.link}
          bodySize={titleModule.bodySize}
          title={titleModule.title}
          supertitle={titleModule.supertitle}
          body={titleModule.body}
          icon={titleModule.icon}
        />
      ) : null}
      {cards
        ? cards.map((card) => (
            <Card
              _id={card._id}
              linkedContent={card.linkedContent}
              headerText={card.headerText}
              subhead={card.subhead}
              supportingText={card.supportingText}
              media={card.media}
              url={card.url}
            />
          ))
        : null}
    </div>
  );
}
CardList.propTypes = CardListPropTypes;

CardList.defaultProps = {
  titleModule: null,

  link: null
};

export default CardList;
