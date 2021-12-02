import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './add_register.scss';






const CreateUser = () => {

    const history = useNavigate();



    //const [button_send_data, setbutton_send_data] = useState(<div className="sendButton-ready" onClick={() => enviaDatosRegistro()>Registrame</div>);
    const [user, setUser] = useState({
        name: ''
    });

    useEffect(() => {


    });

    //Manejadores o Handlers
   const userHandler = (e) => {
       setUser({ ...user, [e.target.name]: e.target.value });
    }


    const enviaDatosRegistro = async () => {
       

        //Generación del body
        let body = {
            title: user.name,
           
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....", body);
        try {
            let res = await axios.post("https://dynamiza-back-end.herokuapp.com/movies/", body);
            console.log("imprimir res: ", res)
            //Guardado de datos en localStorage
        


            
            setTimeout(()=>{
                history("/ver-registros");
            },1000);  
          
        } catch (error) {
            console.log(error)
        }

    }





    return (
        <div>

            <div id="container-form">
                {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
                <div className="container-form-2fields mt-6">
                    <div className="input-form-register-fields">
                        <input className="input-form-register" type='text' name='name' title='name' lenght='30'  onChange={e => userHandler(e) }placeholder='Escribe un nombre' />
                    </div>

                </div>
                <button className="button-register"onClick={() => enviaDatosRegistro()}>Registrarme</button>


            </div>






        </div>







    )



}


export default CreateUser;
