import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
