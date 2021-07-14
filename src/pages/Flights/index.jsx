import React from 'react';
import { Redirect } from 'react-router-dom';
import Title from 'components/Title';
import useFlightsInfo from 'hooks/useFlightsInfo';
import { StyledSection } from './style';
import Button from 'components/Button';

const Flights = () => {
  const {
    selectedOrigin,
    selectedDestination,
    flights,
    flightToDestination,
    flightToOrigin,
  } = useFlightsInfo();

  if (!selectedOrigin || !selectedDestination)
    return <Redirect to="/select"></Redirect>;

  return flights.length > 0 ? (
    <>
      <StyledSection>
        <Title>
          Choose your outbound flight to:{' '}
          {selectedDestination?.location?.cityName}
          <ul>
            {flightToDestination.map((flight) => (
              <li key={flight.flightNo}>{flight.flightNo}</li>
            ))}
          </ul>
        </Title>
      </StyledSection>
      <StyledSection>
        <Title>
          Choose your inbound flight to: {selectedOrigin?.location?.cityName}
          <ul>
            {flightToOrigin.map((flight) => (
              <li key={flight.flightNo}>{flight.flightNo}</li>
            ))}
          </ul>
        </Title>
      </StyledSection>
    </>
  ) : (
    <>
      <p>There's no data for that travel</p>
      <br />
      <Button isLink to="/select">
        Select again
      </Button>
    </>
  );
};

export default Flights;
