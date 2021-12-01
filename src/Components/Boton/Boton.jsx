import React from 'react';
import './Boton.scss';



import { useNavigate } from 'react-router-dom';

const Boton = (props) => {

    const history = useNavigate();

    const gototheurl = () => {
        history(props.url);
    }

    return (
        <div className="designBoton" onClick={()=>gototheurl()}>{props.destino}</div>
        
    )
};

export default Boton;