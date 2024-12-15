import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Your main CSS file
import Main from './Main'; // Ensure this path is correct
import DriverLogin from './DriverLogin'; // Ensure this path is correct
import DriverSignup from './DriverSignup'; // Direct import for DriverSignup component
import RiderLogin from './RiderLogin'; // Import the RiderLogin component
import RiderSignup from './RiderSignup'; // Import the RiderSignup component
import Layout from './Layout'; // Import Layout to wrap around all routes
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main route which includes header/footer */}
        <Route path="/" element={<Layout><Main /></Layout>} />
        
        {/* Other routes, wrapped in Layout for header and footer */}
        <Route path="/driver-login" element={<Layout><DriverLogin /></Layout>} />
        <Route path="/driver-signup" element={<Layout><DriverSignup /></Layout>} />
        <Route path="/rider-login" element={<Layout><RiderLogin /></Layout>} />
        <Route path="/rider-signup" element={<Layout><RiderSignup /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
