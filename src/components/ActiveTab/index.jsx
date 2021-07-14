import React from 'react';
import { useGetLocation } from 'hooks/useGetLocation';

const ActiveTab = () => {
  const location = useGetLocation();
  return <h2>{location}</h2>;
};

export default ActiveTab;
