import { useContext } from 'react';
import StoreContext from 'store/StoreContext';

const useStoreOutFlight = () => {
  const { outFlight, setOutFlight } = useContext(StoreContext);

  return { outFlight, setOutFlight };
};

export default useStoreOutFlight;
