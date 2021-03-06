import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './add_register.scss';

const CreateUser = () => {

    const history = useNavigate();
    const [user, setUser] = useState({
        name: ''
    });

    //Handlers
    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const send_data = async () => {
        let body = {
            name: user.name,
        }

        try {
            let res = await axios.post("https://dynamiza-back-end.herokuapp.com/users/", body);
            console.log("imprimir res: ", res)

            setTimeout(() => {
                history("/ver-registros");
            }, 1000);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div id="container-form">
                <div className="container-form-2fields mt-6">
                    <div className="input-form-register-fields">
                        <h2>Crear usuario</h2>
                        <input className="input-form-register" type='text' name='name' title='name' lenght='30' onChange={e => userHandler(e)} placeholder='Escribe un nombre' />
                    </div>
                </div>
                <button className="button-register" onClick={() => send_data()}>Registrarme</button>
            </div>
        </div>
    )
}


export default CreateUser;
