import React, { useEffect } from 'react';
import CardFlight from 'components/CardFlight';
import { CardWrapper } from './style';
import useStoreOutFlight from 'hooks/useStoreOutFlight';
import useStoreReturnFlight from 'hooks/useStoreReturnFlight';

const CardFlightWrapper = ({
  flights,
  city,
  areOutFlights,
  areReturnFlights,
}) => {
  const { setOutFlight } = useStoreOutFlight();
  const { setReturnFlight } = useStoreReturnFlight();

  useEffect(() => {
    setOutFlight(null);
    setReturnFlight(null);
  }, [setOutFlight, setReturnFlight]);

  const selectFlightHandler = areOutFlights ? setOutFlight : setReturnFlight;
  return (
    <CardWrapper>
      {flights.map((flight) => (
        <CardFlight
          key={flight.flightNo}
          city={city}
          flightData={flight}
          onClick={() => selectFlightHandler(flight)}
          isOutFlight={areOutFlights}
          isReturnFlight={areReturnFlights}
        />
      ))}
    </CardWrapper>
  );
};

export default CardFlightWrapper;
