import React, { useState } from 'react';
import StoreContext from 'store/StoreContext';

const StoreProvider = ({ children }) => {
  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const data = {
    selectedOrigin,
    setSelectedOrigin,
    selectedDestination,
    setSelectedDestination,
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
