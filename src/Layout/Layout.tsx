import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Title from '../components/Title';
import style from './Layout.module.css';
import { Children } from 'react';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
