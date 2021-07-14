import React from 'react';
import { StyledCard, ImageWrapper } from './style';
import airportImage from 'assets/pics/airportdummy.jpg';

const CardAirport = () => {
  return (
    <StyledCard>
      <ImageWrapper>
        <img src={airportImage} alt="airport" />
      </ImageWrapper>

      <h3>{`Airport Code: ASU`}</h3>
      <p>{`City: Asunción`}</p>
    </StyledCard>
  );
};

export default CardAirport;
