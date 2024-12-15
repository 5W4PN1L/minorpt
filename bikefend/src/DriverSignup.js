import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

function DriverSignup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState(''); 
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const [hasDrivingLicense, setHasDrivingLicense] = useState('');
    const [job, setJob] = useState(''); // Track job input
    const [qualification, setQualification] = useState(''); // Track qualification input
    const [isHovered, setIsHovered] = useState(false);  // Track hover state
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false); // Track city dropdown state
    const [windowHeight, setWindowHeight] = useState(window.innerHeight); // Track window height

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return; 
        }

        setErrorMessage('');
        console.log('Driver Signup:', { name, email, mobile, city, password, hasDrivingLicense, job, qualification });
        // You can proceed to submit this data to a backend API or handle validation here
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Handle city dropdown toggle on arrow click
    const toggleCityDropdown = () => {
        setIsCityDropdownOpen(!isCityDropdownOpen);
    };

    // Update window height dynamically on resize
    React.useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={styles.outerContainer(windowHeight)}>
            <div className="driver-signup" style={styles.container}>
                <h2 style={styles.title}>Driver Signup</h2>
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
                        <label htmlFor="mobile" style={styles.label}>Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                            style={styles.input}
                            pattern="^[0-9]{10}$"
                            placeholder="Enter your mobile number"
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="city" style={styles.label}>Select Your City</label>
                        <div style={styles.selectWrapper}>
                            <div
                                style={styles.select}
                                onClick={toggleCityDropdown} // Toggle dropdown on click
                            >
                                {city || "Select a City"}
                                <div style={styles.arrow}></div>
                            </div>
                            {isCityDropdownOpen && (
                                <div style={styles.cityDropdown}>
                                    {cities.map((cityName, index) => (
                                        <div
                                            key={index}
                                            style={styles.cityOption}
                                            onClick={() => {
                                                setCity(cityName);
                                                setIsCityDropdownOpen(false); // Close dropdown after selection
                                            }}
                                        >
                                            {cityName}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
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


                    <div style={styles.formGroup}>
                        <label style={styles.label}>Do you have a valid Driving License?</label>
                        <div style={styles.radioContainer}>
                            <label style={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="drivingLicense"
                                    value="yes"
                                    checked={hasDrivingLicense === 'yes'}
                                    onChange={() => setHasDrivingLicense('yes')}
                                    style={styles.radioInput}
                                />
                                Yes
                            </label>
                            <label style={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="drivingLicense"
                                    value="no"
                                    checked={hasDrivingLicense === 'no'}
                                    onChange={() => setHasDrivingLicense('no')}
                                    style={styles.radioInput}
                                />
                                No
                            </label>
                        </div>
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
                    Already have an account? <Link to="/driver-login" style={styles.link}>Login here</Link>
                </p>
            </div>
        </div>
    );
}

// List of Cities for the dropdown
const cities = [
    "Aizawl", "Ajmer", "Agartala", "Agra", "Ahmedabad", "Ambala", "Amritsar", 
    "Aurangabad", "Bhopal", "Bilaspur", "Bhubaneswar", "Bhagalpur", "Bokaro", 
    "Cuttack", "Chennai", "Coimbatore", "Chandigarh", "Darjeeling", "Dhanbad", 
    "Durg", "Durgapur", "Dimapur", "Dehradun", "Gaya", "Gandhinagar", "Gangtok", 
    "Gwalior", "Guwahati", "Hisar", "Howrah", "Hubli-Dharwad", "Hyderabad", "Imphal", 
    "Indore", "Jabalpur", "Jamshedpur", "Jalandhar", "Jodhpur", "Jorethang", "Kanpur", 
    "Karimnagar", "Kullu", "Kochi", "Kolkata", "Kurnool", "Lucknow", "Ludhiana", 
    "Madurai", "Mangaluru", "Mapusa", "Mumbai", "Muzaffarpur", "Mysuru", "Nagpur", 
    "Nainital", "Nizamabad", "Patiala", "Patna", "Puri", "Pune", "Raipur", "Ranchi", 
    "Rajkot", "Rishikesh", "Rourkela", "Salem", "Shimla", "Silchar", "Siliguri", 
    "Surat", "Tawang", "Thiruvananthapuram", "Thoubal", "Tirupati", "Trichy", 
    "Udaipur", "Ujjain", "Varanasi", "Vasco da Gama", "Vadodara", "Visakhapatnam", 
    "Vijayawada"
];

// Styles for dynamic city dropdown and window adjustments
const styles = {
    outerContainer: (windowHeight) => ({
        height: windowHeight > 600 ? '150vh' : 'auto',  // Adjust height dynamically
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0', 
    }),
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
    selectWrapper: {
        position: 'relative',
    },
    select: {
        padding: '0.75rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        cursor: 'pointer',
        textAlign: 'left',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrow: {
        border: '5px solid transparent',
        borderTop: '5px solid #106861',
        marginLeft: '10px',
    },
    cityDropdown: {
        maxHeight: '200px',
        overflowY: 'auto',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    radioContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '0.5rem',
    },
    radioLabel: {
        marginRight: '1rem',
        fontSize: '1rem',
    },
    radioInput: {
        marginRight: '0.5rem',
    },
    cityOption: {
        padding: '0.75rem',
        cursor: 'pointer',
        backgroundColor: '#fff',
        borderBottom: '1px solid #ccc',
    },
    cityOptionHover: {
        backgroundColor: '#f0f0f0',
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

export default DriverSignup;
