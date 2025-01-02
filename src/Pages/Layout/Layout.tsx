import Header from '../../components/Layout/Header'; 
import Footer from '../../components/Layout/Footer';
import Title from '../../components/Layout/Title';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <Title />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
