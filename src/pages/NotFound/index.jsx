import React from 'react';
import Title from 'components/Title';
import { NotFoundWrapper } from './style';
import Button from 'components/Button';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Title>00PS</Title>
      <p>Something went wrong.</p>
      <br />
      <Button isLink to="/">
        Back to Home
      </Button>
    </NotFoundWrapper>
  );
};

export default NotFound;
