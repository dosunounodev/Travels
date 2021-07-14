import React from 'react';
import { StyledFooter, FooterContent, FooterText } from './style';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterText>
          Made with 💙 by{' '}
          <a href="http://dosunounodev.com" target="_blank" rel="noreferrer">
            dosunounodev
          </a>{' '}
        </FooterText>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
