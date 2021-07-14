import React from 'react';
import { StyledLink, StyledButton, DisabledButton } from './style';

const Button = ({ children, onClick, href, isLink, to, disabled }) => {
  if (disabled) return <DisabledButton>{children}</DisabledButton>;

  if (isLink) return <StyledLink to={to}>{children}</StyledLink>;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
