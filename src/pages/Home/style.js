import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const StyledTitle = styled.h1`
  text-align: center;
  p:first-child {
    font-size: 3.2rem;
    font-weight: 400;
  }
  p:nth-child(2) {
    font-size: 4.8rem;
    span {
      color: #1380c0;
    }
    span:nth-child(3) {
      font-weight: 400;
      font-style: italic;
    }
  }
`;

export { StyledHeader, StyledTitle };
