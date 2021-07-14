import React from 'react';
import { LogoWrapper } from './style';
import travelsLogo from 'assets/logos/codeatravel.png';

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={travelsLogo} alt="CodeaTravelsLogo" />
    </LogoWrapper>
  );
};

export default Logo;
