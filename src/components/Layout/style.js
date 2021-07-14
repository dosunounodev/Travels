import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
`;

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 100px);
  margin: 50px auto 0;
  background-color: #fff;
`;

export { MainWrapper, PageWrapper };
