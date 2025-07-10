import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
// Import other pages when you create them
// import AboutPage from './pages/AboutPage';
// import WorkPage from './pages/WorkPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* Add other routes later */}
        {/* <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="contact" element={<ContactPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;