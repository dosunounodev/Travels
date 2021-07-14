import useStoreDestination from './useStoreDestination';
import useStoreOrigin from './useStoreOrigin';
import { matchOriginAndDestination } from 'helpers/matchOriginAndDestination';

const useFlightsInfo = () => {
  const { selectedOrigin } = useStoreOrigin();
  const { selectedDestination } = useStoreDestination();
  const flights = matchOriginAndDestination(
    selectedOrigin?.code,
    selectedDestination?.code
  );

  const flightToDestination = flights.filter(
    (flight) => flight.destination === selectedDestination.code
  );
  const flightToOrigin = flights.filter(
    (flight) => flight.destination === selectedOrigin.code
  );

  return {
    selectedOrigin,
    selectedDestination,
    flights,
    flightToDestination,
    flightToOrigin,
  };
};

export default useFlightsInfo;
