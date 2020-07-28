import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import './menu.css'
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="IgorFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;