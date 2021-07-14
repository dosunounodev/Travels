import React, { useEffect } from 'react';
import Title from 'components/Title';
import CardAirportWrapper from 'components/CardAirportWrapper';
import Button from 'components/Button';
import useFlightsInfo from 'hooks/useFlightsInfo';
import { routes } from 'data/routes';
import { StyledSection } from './style';

const Select = () => {
  const {
    selectedOrigin,
    setSelectedOrigin,
    selectedDestination,
    setSelectedDestination,
  } = useFlightsInfo();

  const destinations = selectedOrigin?.destinations;

  useEffect(() => {
    setSelectedOrigin(null);
    setSelectedDestination(null);
  }, [setSelectedOrigin, setSelectedDestination]);

  return (
    <>
      <StyledSection>
        <Title>Choose your origin</Title>
        <CardAirportWrapper cards={routes}></CardAirportWrapper>
      </StyledSection>
      <StyledSection>
        <Title>Choose your destination</Title>
        {selectedOrigin ? (
          <CardAirportWrapper
            areDestination
            cards={destinations}
          ></CardAirportWrapper>
        ) : (
          <p>Please Select an Origin</p>
        )}
      </StyledSection>
      <StyledSection>
        <Title>Select the flights</Title>
        {selectedDestination ? (
          <Button isLink to="/flights">
            Lets Flight!
          </Button>
        ) : selectedOrigin ? (
          <p>Please Select a Destination</p>
        ) : (
          <p>Please Select an Origin and Destination</p>
        )}
      </StyledSection>
    </>
  );
};

export default Select;
