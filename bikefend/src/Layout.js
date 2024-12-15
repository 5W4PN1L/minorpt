// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';  // Assuming your styles are here
import logo from './logo.png';

const Layout = ({ children }) => {
    return (
        <div className="Main">
            <header>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Bike Icon" />
                        <h1>BiKool</h1>
                    </div>
                    <div className="nav-links">
                        {/* Links for navigation */}
                        <Link to="/rider-login" className="cta-btn">Rider Login/Signup</Link>
                        <Link to="/driver-login" className="cta-btn">Driver Login/Signup</Link>
                    </div>
                </nav>
            </header>

            <main>
                {children}  {/* The children will be the page content */}
            </main>

            <footer>
                <div className="footercopy">
                    <p>&copy; Developed by B.Swapnil. All Rights Reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#">Contact Us</a>
                    <a href="#">Site Map</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
