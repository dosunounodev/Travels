import React from 'react';
import Button from 'components/Button';
import Title from 'components/Title';
import useFlightsInfo from 'hooks/useFlightsInfo';
import { FlightText, FlightTitle } from './style';

const TravelInfo = () => {
  const { outFlight, returnFlight } = useFlightsInfo();

  return (
    <>
      <Title>Your travel info:</Title>
      {!outFlight && !returnFlight && <p>Please select the flights</p>}
      {outFlight && (
        <>
          <FlightTitle>Out Flight:</FlightTitle>
          <FlightText>
            {outFlight?.origin} - {outFlight?.destination}
          </FlightText>{' '}
          <FlightText>
            Flight No: <span>{outFlight?.flightNo}</span>
          </FlightText>
        </>
      )}
      <br />
      {returnFlight && (
        <>
          <FlightTitle>Return Flight:</FlightTitle>
          <FlightText>
            {returnFlight?.origin} - {returnFlight?.destination}
          </FlightText>
          <FlightText>
            Flight No: <span>{returnFlight?.flightNo}</span>
          </FlightText>
        </>
      )}
      <br />
      {outFlight && returnFlight && (
        <Button isLink to="/">
          Travel Again!
        </Button>
      )}
    </>
  );
};

export default TravelInfo;
