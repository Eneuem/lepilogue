import React from 'react';
import './footer.css'; // Assurez-vous de créer ce fichier CSS

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Eneuem. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
