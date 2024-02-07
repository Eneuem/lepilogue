import React, { useState } from 'react';
import './archiveContainer.css';
import image1 from '../assets/aemporter.jpg';
import image2 from '../assets/rudimentaire.jpg';
import image3 from '../assets/l2f.jpg';
import image4 from '../assets/brocoli.jpg';
import image5 from '../assets/tpplt.jpg';

const images = [
    { src: image1, link: 'https://example.com/image1', title: 'A emporter (2012)'},
    { src: image2, link: 'https://example.com/image2', title: 'Rudimentaire (2014)'},
    { src: image3, link: 'https://example.com/image3', title: 'Lignes 2 Fuite (2014)'},
    { src: image4, link: 'https://example.com/image4', title: 'EP JCR (2016)'},
    { src: image5, link: 'https://example.com/image5', title: 'TPPLT (2021)'},
];

const ImageComponent = () => {
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

export default ImageComponent;
