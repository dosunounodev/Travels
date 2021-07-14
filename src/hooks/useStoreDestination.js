import { useContext } from 'react';
import StoreContext from 'store/StoreContext';

const useStoreDestination = () => {
  const { selectedDestination, setSelectedDestination } =
    useContext(StoreContext);

  return { selectedDestination, setSelectedDestination };
};

export default useStoreDestination;
