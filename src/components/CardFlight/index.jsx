import React from 'react';
import { getTimeData } from 'helpers/getTimeData';
import airportImage from 'assets/pics/airportdummy.jpg';
import { StyledCard, ImageWrapper, DataWrapper } from './style';
import useFlightsInfo from 'hooks/useFlightsInfo';

const CardFlight = ({
  flightData,
  city,
  onClick,
  isOutFlight,
  isReturnFlight,
}) => {
  const { departureTime, arrivalTime, minutesDuration } = getTimeData(
    flightData.departureDate,
    flightData.arrivalDate
  );

  const { outFlight, returnFlight } = useFlightsInfo();

  const isSelectedCard = isOutFlight
    ? outFlight?.id === flightData.id
    : returnFlight?.id === flightData.id;

  return (
    <StyledCard onClick={onClick} isSelectedCard={isSelectedCard}>
      <ImageWrapper>
        <img src={airportImage} alt="airport" />
      </ImageWrapper>
      <DataWrapper isSelectedCard={isSelectedCard}>
        <p>
          Airport Code: <span>{`${flightData.origin}`}</span>
        </p>
        <p>
          Airport City: <span>{city}</span>
        </p>
        <p>
          Departure: <span>{departureTime}</span>
          Arrival: <span>{arrivalTime}</span>
        </p>
        <p>
          Duration: <span>{minutesDuration} minutes</span>
        </p>
        <p>
          Price: <span>{flightData.fares[0].prices.afterTax}</span>
        </p>
      </DataWrapper>
    </StyledCard>
  );
};

export default CardFlight;
