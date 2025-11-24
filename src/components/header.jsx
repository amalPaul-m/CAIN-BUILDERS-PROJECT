import React from 'react';
import Logo from '../assets/logo.png';
import Whatsapp from './connectWhatsapp'


const Header = () => {
    return (
        <div>
            <header>
            <div className="content-fit">
                <div className="logo"><img src={Logo} alt="logo" height="50" /></div>
                <nav>
                <ul>
                    <Whatsapp />
                </ul>
                </nav>
            </div>
            </header>
        </div>
    );
}

export default Header;