import { useState } from 'react';
import '../CSS/Navbar.css';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    let navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    let handleNavigation = (e) => {
        navigate(`/${e.target.name}`);
    };

    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className="header">
                    <img src="./logo.png" alt="logo" />
                    <h2>Jarurat Care</h2>
                </div>

                {/* Desktop Nav */}
                <div className="nav-btns desktop-nav">
                    <a name="home">Home</a>
                    <a name="patients" onClick={handleNavigation}>
                        Patients
                    </a>
                    <a name="addPatient" onClick={handleNavigation}>
                        Add Patient
                    </a>
                    <a name="about">About</a>
                </div>

                {/* Hamburger (mobile) */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu with slide animation */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <a name="home">Home</a>
                <a name="patients" onClick={handleNavigation}>
                    Patients
                </a>
                <a name="addPatient" onClick={handleNavigation}>
                    Add Patient
                </a>
                <a name="about">About</a>
            </div>
        </div>
    )
}