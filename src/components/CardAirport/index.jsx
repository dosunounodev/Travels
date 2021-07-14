import React from 'react';
import useAirportCardInfo from 'hooks/useAirportCardInfo';
import { StyledCard, ImageWrapper, DataWrapper } from './style';
import airportImage from 'assets/pics/airportdummy.jpg';

const CardAirport = ({ cardData = {}, isDestination }) => {
  const { isSelectedCard, handleSelect } = useAirportCardInfo({
    cardData,
    isDestination,
  });

  return (
    <StyledCard onClick={handleSelect} isSelectedCard={isSelectedCard}>
      <ImageWrapper>
        <img src={airportImage} alt="airport" />
      </ImageWrapper>

      <DataWrapper isSelectedCard={isSelectedCard}>
        <p>
          Airport Code: <span>{`${cardData?.code}`}</span>
        </p>
        <p>
          Airport City: <span>{`${cardData?.location?.cityName}`}</span>
        </p>
      </DataWrapper>
    </StyledCard>
  );
};

export default CardAirport;
