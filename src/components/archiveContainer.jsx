import React, { useState } from 'react';
import './archiveContainer.css';
import image1 from '../assets/aemporter.jpg';
import image2 from '../assets/rudimentaire.jpg';
import image3 from '../assets/l2f.jpg';
import image4 from '../assets/ep.jpg';
import image5 from '../assets/tpplt.jpg';

const images = [
    { src: image1, link: '..assets/dl/aemporter.zip', title: 'A emporter (2012)'},
    { src: image2, link: 'https://open.spotify.com/intl-fr/album/3avs6oPgTmFFFYvIezYjX5', title: 'Rudimentaire (2014)'},
    { src: image3, link: 'https://open.spotify.com/album/510m21ThVEwScnThnHoVQ9', title: 'Lignes 2 Fuite (2014)'},
    { src: image4, link: 'https://open.spotify.com/intl-fr/album/1eSahJPxqVqU85QJsNdsHL?si=cqILdk-NQKunY_mmaCgywA&nd=1&dlsi=393665f9bf1742e2', title: 'EP JCR (2016)'},
    { src: image5, link: '..assets/dl/tpplt.zip', title: 'TPPLT (2021)'},
];

const ArchiveContainer = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    return (
        <div className='archive_container'>
            <div>
                <h2>Archives</h2>
            </div>
            <div className='figures'>
                {images.map((image, index) => (
                    <div
                        className='figure'
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <img src={image.src} alt={`Image ${index}`} />
                        {hoverIndex === index && (
                            <div className="overlay">
                                <a href={image.link} target="_blank" rel="noopener noreferrer">
                                    <p>{image.title}</p>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArchiveContainer;
