import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import ActiveTab from 'components/ActiveTab';
import { StyledNavBar, NavContainer } from './style';

const TopBar = () => {
  return (
    <StyledNavBar>
      <NavContainer>
        <Link to="/">
          <Logo />
        </Link>
        <ActiveTab />
      </NavContainer>
    </StyledNavBar>
  );
};

export default TopBar;
