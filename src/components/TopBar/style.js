import styled from 'styled-components';

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #141313;
  color: #fafafa;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 50px;
  margin: 0 auto;
  padding: 0 20px;
`;

export { StyledNavBar, NavContainer };
