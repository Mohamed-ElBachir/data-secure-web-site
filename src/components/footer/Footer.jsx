import React from 'react';
import { SiDatabricks } from 'react-icons/si';
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <div className="logo-footer"><SiDatabricks className='icon'/> </div>
            </div>
            <div className="col-container">
                <div className="col">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer