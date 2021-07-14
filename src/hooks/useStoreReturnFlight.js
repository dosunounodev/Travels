import { useContext } from 'react';
import StoreContext from 'store/StoreContext';

const useStoreReturnFlight = () => {
  const { returnFlight, setReturnFlight } = useContext(StoreContext);

  return { returnFlight, setReturnFlight };
};

export default useStoreReturnFlight;
