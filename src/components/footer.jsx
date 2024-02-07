import React from 'react';
import './footer.css'; 
import logo from '../assets/NEM.png';

const Footer = () => {
    return (
        <footer className="footer">
            <p><img src={logo} width="30" height="auto"/>&copy;</p>
        </footer>
    );
}

export default Footer;
