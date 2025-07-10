import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <main className="main-content">
        <Outlet /> {/* This renders the current route */}
      </main>
    </div>
  );
};

export default Layout;