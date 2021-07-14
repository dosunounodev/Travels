import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #141313;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: #fafafa;
`;

const FooterText = styled.p`
  width: 100%;
  text-align: center;

  a {
    font-weight: 700;
    color: #1380c0;
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    will-change: color;
    &:hover {
      color: #fafafa;
    }
  }
`;

export { StyledFooter, FooterContent, FooterText };
