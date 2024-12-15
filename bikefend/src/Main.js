import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link for navigation
import DriverSignup from './DriverSignup';
import RiderSignup from './RiderSignup';
import DriverLogin from './DriverLogin'; // Assuming you have a DriverLogin component
import RiderLogin from './RiderLogin'; // Assuming you have a RiderLogin component
import './Main.css';
import logo from './logo.png';

function Main() {
    return (
        <div className="Main">
            {/* Header Section */}
            <header>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Bike Icon" />
                        <h1>BiKool</h1>
                    </div>
                    <div className="nav-links">
                        {/* Using Link to navigate to login/signup pa   ges */}
                        <Link to="/rider-login" className="cta-btn">Rider Login/Signup</Link>
                        <Link to="/driver-login" className="cta-btn">Driver Login/Signup</Link>
                    </div>
                </nav>
            </header>

            {/* Main Banner Section */}
            <section className="main-banner">
                <div className="banner-content">
                    <h2>Join the Bike Pooling Community!</h2>
                    <p>Connect with drivers and riders for an eco-friendly travel experience.</p>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="feature"><h3>Security</h3><p>Your safety is our priority. All users are verified.</p></div>
                <div className="feature"><h3>Lower Fare</h3><p>Share rides to save money on transportation.</p></div>
                <div className="feature"><h3>On Time</h3><p>Find rides that match your schedule with ease.</p></div>
                <div className="feature"><h3>24x7 Dedicated Support</h3><p>Always at your service to provide you with a seamless experience.</p></div>
            </section>

            {/* User Options Section */}
            <section className="user-options">
                <h2>Login or Sign Up</h2>
                <div className="options">
                    {/* Links for Rider Login/Signup and Driver Login/Signup */}
                    <Link to="/rider-login" className="cta-btn">Rider Login/Signup</Link>
                    <Link to="/driver-login" className="cta-btn">Driver Login/Signup</Link>
                </div>
            </section>

            {/* Routes for driver/rider signup and login pages */}
            <main>
                <Routes>
                    <Route path="/driver-signup" element={<DriverSignup />} />
                    <Route path="/rider-signup" element={<RiderSignup />} />
                    <Route path="/driver-login" element={<DriverLogin />} />
                    <Route path="/rider-login" element={<RiderLogin />} />
                </Routes>
            </main>


        </div>
    );
}

export default Main;
