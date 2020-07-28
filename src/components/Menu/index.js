import React from 'react';
import Logo from '../../assets/image/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img class="Logo" src={Logo} alt="DevFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;