import React from 'react';
import './mainContainer.css'; 
import pochetteImage from '../assets/pochette.png';

const MainContainer = () => {
    return (
        <div className="main_container">
            <div>
                <img src={pochetteImage} width="500" height="500" alt="Placeholder: 500x500"/>
            </div>
            <div className="text_container">
                <h2>Un dernier projet pour la route :<span> "L'épilogue"</span></h2>
                <br/>
                <p>Avec la participation de Sima & SEV'<br/>
                   Sur des prods à Dark Factory, Phasm, Cxdy, Cashmoney AP, Guillermo, Syndrome & Young Taylor<br/>
                   Enregistré, mixé et masterisé par Sima à la Boite Noire</p>
                <br/>
                <div>
                    <button className='button_stream'>
                        <a href="https://distrokid.com/hyperfollow/nem/lpilogue" target="_blank" rel="noopener noreferrer">Streames</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
