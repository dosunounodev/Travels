import React from 'react';
import StoreContext from 'store/StoreContext';

const StoreProvider = ({ children }) => {
  const data = {};
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
