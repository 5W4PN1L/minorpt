import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DriverLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false);  // Track hover state

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Driver Login:', { email, password });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div style={styles.outerContainer}>
            <div className="driver-login" style={styles.container}>
                <h2 style={styles.title}>Driver Login</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}><b>Email</b></label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your E-Mail ID" // Placeholder text
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}><b>Password</b></label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your password" // Placeholder text
                        />
                    </div>
                    <button
                        type="submit"
                        className="cta-btn"
                        style={{
                            ...styles.button,
                            backgroundColor: isHovered ? '#106861' : '#aeea00',  // Swap color on hover
                            color: isHovered ? '#aeea00' : '#106861'  // Swap color on hover
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Login
                    </button>
                </form>
                <p style={styles.footerText}>
                    Don't have an account? <Link to="/driver-signup" style={styles.link}>Sign up here</Link>
                </p>
            </div>
        </div>
    );
}

// Styles
const styles = {
    outerContainer: {
        height: '100vh', // Full height of the viewport
        display: 'flex', // Use flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        backgroundColor: '#f0f0f0', // Light gray background for contrast
    },
    container: {
        padding: '2rem',
        maxWidth: '400px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff', // White background for the form
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    title: {
        color: '#106861', // Main theme color for title
        marginBottom: '1.5rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    label: {
        color: '#106861', // Color for labels
        marginBottom: '0.5rem',
    },
    input: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        transition: 'border-color 0.3s',
    },
    button: {
        padding: '0.75rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#aeea00', // Default background color
        color: '#106861', // Default text color
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s', // Smooth transition on hover
    },
    footerText: {
        marginTop: '1rem',
        color: '#555',
    },
    link: {
        color: '#106861',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default DriverLogin;
