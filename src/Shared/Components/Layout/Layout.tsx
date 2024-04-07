import Footer from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <>
      <Nav />
<Outlet/>

<Footer />
    </>);
};

export default Layout;
