import React from 'react';
import Logo from '../../assets/images/logo.png';
import './menu.css'
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="IgorFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;