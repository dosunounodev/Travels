import React from 'react';
import TopBar from 'components/TopBar';
import { MainWrapper, PageWrapper } from './style';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <TopBar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default Layout;
