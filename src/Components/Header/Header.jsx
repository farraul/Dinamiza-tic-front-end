import React from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from '../Boton/Boton';
import logo from '../../images/logo.png';
import './Header.scss'

const Header = () => {
    const history = useNavigate();
    const llevame = () => {
        history("/");
    }

    return (
        <div className="Header">
            <div>
                <img className="logo" src={logo} alt="logo" onClick={() => llevame()} />
            </div>
            <div className="menu">
                <Boton destino="Home-Buscador" url="/" />
                <Boton destino="Registrar usuario" url="/regristrar-usuario" />
                <Boton destino="Ver-Borrar-Actualizar usuarios" url="/ver-registros" />
            </div>
        </div>
    )
};
export default Header;