import React from 'react';
import { Redirect } from 'react-router-dom';
import Title from 'components/Title';
import Button from 'components/Button';
import CardFlightWrapper from 'components/CardFlightWrapper';
import useFlightsInfo from 'hooks/useFlightsInfo';
import { StyledSection, NoDataWrapper } from './style';
import TravelInfo from 'components/TravelInfo';

const Flights = () => {
  const {
    selectedOrigin,
    selectedDestination,
    flights,
    flightsToDestination,
    flightsToOrigin,
  } = useFlightsInfo();

  if (!selectedOrigin || !selectedDestination)
    return <Redirect to="/select"></Redirect>;

  return flights.length > 0 ? (
    <>
      <StyledSection>
        <Title>
          Choose your outbound flight to:{' '}
          {selectedDestination?.location?.cityName}
        </Title>
        <CardFlightWrapper
          city={selectedOrigin.location.cityName}
          flights={flightsToDestination}
          areOutFlights
        />
      </StyledSection>

      <StyledSection>
        <Title>
          Choose your inbound flight to: {selectedOrigin?.location?.cityName}
        </Title>
        <CardFlightWrapper
          city={selectedOrigin.location.cityName}
          flights={flightsToOrigin}
          areReturnFlights
        />
      </StyledSection>

      <StyledSection>
        <TravelInfo />
      </StyledSection>
    </>
  ) : (
    <NoDataWrapper>
      <p>There's no data for that travel</p>
      <br />
      <Button isLink to="/select">
        Select again
      </Button>
    </NoDataWrapper>
  );
};

export default Flights;
