import React from 'react';
// import Image from 'react-bootstrap/Image'
import logo from '../assets/images/vaporCrystal.png'; // Tell webpack this JS file uses this image
import GetQuote from './GetQuote';

const Header = (props) => {

    return (
        <div className="text-center">
            <img src={ logo } alt="logo"  className="logo" />
            {/* <Image src={ logo } /> */}
            <GetQuote />
        </div>
    );
}

export default Header;