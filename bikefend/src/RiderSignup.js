import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function RiderSignup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [job, setJob] = useState(''); // Track job input
    const [qualification, setQualification] = useState(''); // Track qualification input
    const [errorMessage, setErrorMessage] = useState('');
    const [isHovered, setIsHovered] = useState(false);  // Track hover state

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        setErrorMessage('');
        console.log('Rider Signup:', { name, email, password, job, qualification });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div style={styles.outerContainer}>
            <div className="rider-signup" style={styles.container}>
                <h2 style={styles.title}>Rider Signup</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="name" style={styles.label}>Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your Full Name"
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your E-Mail ID"
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    {/* Job field */}
                    <div style={styles.formGroup}>
                        <label htmlFor="job" style={styles.label}>Job</label>
                        <input
                            type="text"
                            id="job"
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your Job"
                        />
                    </div>

                    {/* Qualification field */}
                    <div style={styles.formGroup}>
                        <label htmlFor="qualification" style={styles.label}>Qualification</label>
                        <input
                            type="text"
                            id="qualification"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your Qualification"
                        />
                    </div>

                    {errorMessage && (
                        <div style={styles.errorMessage}>
                            {errorMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="cta-btn"
                        style={{
                            ...styles.button,
                            backgroundColor: isHovered ? '#106861' : '#aeea00',
                            color: isHovered ? '#aeea00' : '#106861'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Sign Up
                    </button>
                </form>
                <p style={styles.footerText}>
                    Already have an account? <Link to="/rider-login" style={styles.link}>Login here</Link>
                </p>
            </div>
        </div>
    );
}

// Inline styles for the RiderSignup component
const styles = {
    outerContainer: {
        height: '120vh', // Full height of the viewport
        display: 'flex', // Use flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        backgroundColor: '#f0f0f0', // Light background color
    },
    container: {
        padding: '2rem',
        maxWidth: '400px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        color: '#106861',
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
        color: '#106861',
        marginBottom: '0.5rem',
    },
    input: {
        padding: '0.75rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        transition: 'border-color 0.3s',
    },
    button: {
        padding: '0.75rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#aeea00',
        color: '#106861',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.875rem',
        marginBottom: '1rem',
        textAlign: 'left',
    },
    footerText: {
        marginTop: '1rem',
        color: '#555',
        fontSize: '0.875rem',
    },
    link: {
        color: '#106861',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default RiderSignup;
