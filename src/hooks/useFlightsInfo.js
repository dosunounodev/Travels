import useStoreDestination from './useStoreDestination';
import useStoreOrigin from './useStoreOrigin';
import { matchOriginAndDestination } from 'helpers/matchOriginAndDestination';
import useStoreOutFlight from './useStoreOutFlight';
import useStoreReturnFlight from './useStoreReturnFlight';

const useFlightsInfo = () => {
  const { selectedOrigin, setSelectedOrigin } = useStoreOrigin();
  const { selectedDestination, setSelectedDestination } = useStoreDestination();
  const { outFlight } = useStoreOutFlight();
  const { returnFlight } = useStoreReturnFlight();
  const flights = matchOriginAndDestination(
    selectedOrigin?.code,
    selectedDestination?.code
  );

  const flightsToDestination = flights.filter(
    (flight) => flight.destination === selectedDestination.code
  );
  const flightsToOrigin = flights.filter(
    (flight) => flight.destination === selectedOrigin.code
  );

  return {
    selectedOrigin,
    setSelectedOrigin,
    selectedDestination,
    setSelectedDestination,
    flights,
    flightsToDestination,
    flightsToOrigin,
    outFlight,
    returnFlight,
  };
};

export default useFlightsInfo;
