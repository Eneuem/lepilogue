import React from 'react';
import './footer.css'; 
import logo from '../assets/NEM.png';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; <img src={logo} width="30" height="auto"/> {new Date().getFullYear()} . Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
