import React from 'react';
import Title from 'components/Title';
import CardAirportWrapper from 'components/CardAirportWrapper';
import Button from 'components/Button';
import useStoreOrigin from 'hooks/useStoreOrigin';
import useStoreDestination from 'hooks/useStoreDestination';
import { routes } from 'data/routes';
import { StyledSection } from './style';

const Select = () => {
  const { selectedOrigin } = useStoreOrigin();
  const { selectedDestination } = useStoreDestination();
  const destinations = selectedOrigin?.destinations;
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
