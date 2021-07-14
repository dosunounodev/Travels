import Button from 'components/Button';
import React from 'react';
import { StyledHeader, StyledTitle } from './style';

const Home = () => {
  return (
    <StyledHeader>
      <StyledTitle>
        <p>👋Welcome to:</p>
        <p>
          CODEA<span>IT</span>
          <br />
          <span>Travels</span>
        </p>
      </StyledTitle>
      <br />
      <Button isLink to="/select">
        Search my flights!
      </Button>
    </StyledHeader>
  );
};

export default Home;
