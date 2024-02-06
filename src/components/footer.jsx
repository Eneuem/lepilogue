import React from 'react';
import './footer.css'; 
import logo from '../assets/NEM.png';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; <img src={logo} width="50" height="0.5em"/> {new Date().getFullYear()} . Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
