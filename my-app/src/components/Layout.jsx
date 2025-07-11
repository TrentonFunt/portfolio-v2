import { Outlet} from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  
  return (
    <div className="portfolio-container">
      <Header />
      
    
        <div className="fixed-initials">
          T-A
        </div>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;