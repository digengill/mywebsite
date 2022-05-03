import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer__container'>
            <p>
                Digen Gill &copy;{new Date().getFullYear()} 
            </p>
        </div>
    )
    }

export default Footer
