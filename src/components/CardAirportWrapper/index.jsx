import React from 'react';
import CardAirport from 'components/CardAirport';

import { CardWrapper } from './style';

const CardAirportWrapper = ({ areDestination, cards }) => {
  return (
    <CardWrapper>
      {cards.map((card) => (
        <CardAirport
          key={card.code}
          isDestination={areDestination}
          cardData={card}
        ></CardAirport>
      ))}
    </CardWrapper>
  );
};

export default CardAirportWrapper;
