import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Layout.css';
const Layout = () => {
  return (
    <div className="d-flex flex-column justify-content-between min-vh-100 ">
      <Header />
      <main className="main  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
