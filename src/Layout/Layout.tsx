import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Title from '../components/Title';
import style from './Layout.module.css';
import { Children, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';

const Layout = (Children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
  return (
    <div className="layout">
      <Header />
      <Title />
      <div>
        {Children}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
