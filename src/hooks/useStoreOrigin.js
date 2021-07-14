import { useContext } from 'react';
import StoreContext from 'store/StoreContext';

const useStoreOrigin = () => {
  const { selectedOrigin, setSelectedOrigin } = useContext(StoreContext);

  return { selectedOrigin, setSelectedOrigin };
};

export default useStoreOrigin;
