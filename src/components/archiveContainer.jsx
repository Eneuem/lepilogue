import React from 'react';
import './archiveContainer.css';
import image1 from '../assets/aemporter.jpg';
import image2 from '../assets/rudimentaire.jpg';
import image3 from '../assets/l2f.jpg';
import image4 from '../assets/brocoli.jpg';
import image5 from '../assets/tpplt.jpg';

const images = [
    { src: image1, link: 'https://example.com/image1' },
    { src: image2, link: 'https://example.com/image2' },
    { src: image3, link: 'https://example.com/image3' },
    { src: image4, link: 'https://example.com/image4' },
    { src: image5, link: 'https://example.com/image5' },
];

const ImageComponent = () => {
    return (
        <div className=''>
            <div className=''>
                <h2>Archives</h2>
            </div>
            <div className='figures'>
                {images.map((image, index) => (
                    <a key={index} href={image.link}>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={`Image ${index}`} />
                        </a>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ImageComponent;
