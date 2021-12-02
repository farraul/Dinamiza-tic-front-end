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

    return(
        <div className="Header">
            <div>
                <img className="logo" src={logo} alt="logo" onClick={()=>llevame()} />
            </div>
            <div className="menu">
                <Boton destino="Home" url="/"/>
                <Boton destino="Registrar usuario" url="/regristrar-usuario"/>
                <Boton destino="Ver usuarios" url="/ver-registros"/>
               {/* <Boton destino="Films" url="/films"/>

                { props.data_user?.user?._id ? <Boton destino="Perfil" url="/profile"/>: null}
                { !props.data_user?.user?._id && <Boton destino="Registro" url="/register"/> }
                { /*sinonimo:   props.data_user?.user?._id ?null :<Boton destino="Registro" url="/register"/>*/ }
                { /*!props.data_user?.user?._id && <Boton destino="Login" url="/login"/>}
                { props.data_user?.user?.rol=="admin" ? <Boton destino="Admin" url="/admin"/>: null}
                <div className="icono-user-logeado">
                <img className="img-profile" src={profile} alt="profile"  />
                    {props.data_user?.user?.name}</div>

                    */}

                
            </div>
        </div>
    )

};


export default Header;