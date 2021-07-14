import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fafafa;
  background-color: #1380c0;
`;

const StyledButton = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 10px 20px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fafafa;
  background-color: #1380c0;
  cursor: pointer;
`;

const DisabledButton = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 10px 20px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fafafa;
  background-color: #aaaaaa;
  opacity: 0.3;
  cursor: not-allowed;
`;

export { StyledLink, StyledButton, DisabledButton };
