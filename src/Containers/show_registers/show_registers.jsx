import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './show_registers.scss';






const ShowUsers = () => {
    const history = useNavigate();


    const max_fields_per_page = 2;
    let current_index = -1; //indice del array máximo
    let current_page = 0;

    const [users, setusers] = useState([""]);
    const [result, setresult]=useState([]);

    const [userdelete, setuserdelete]=useState([]);
  




    useEffect(() => {
        take_registers();

    }, []);


   

    const take_registers = async () => {
        let res = await axios.get("https://dynamiza-back-end.herokuapp.com/movies/");
        setusers(res.data);
    };



    useEffect(() => {
      
        const length_users = users.length;
        const max_pages = Math.ceil(length_users / max_fields_per_page);// númnero máximo de páginas a mostrar, redondea a la alta el ceil
        addpage();

     

    }, [users]);



   const addpage = () => {
     
        current_page +=1;
        current_index += max_fields_per_page;
        console.log("current_index",current_index);
        console.log("currenpage: ",current_page);


        const result_data = users.filter((user, index) => {

            if ( index > current_index - max_fields_per_page && index <= current_index) {
                return user
            }
        });
        setresult(result_data);
    }

    const deleteuser = async (data) => {
       /* let body = {
            id: user.id,
        }*/
        //Conexion a axios y envio de datos
        //console.log("ENVIANDO AL BACKEND ESTO....", body);

        try {
            let res = await axios.delete(`https://dynamiza-back-end.herokuapp.com/movies/${data}`);

            
            console.log("dentro del try,orrado", res);
            
            setuserdelete("Usuario borrado, recarga la página para comprobarlo");
       

        } catch (error) {
            console.log("error de front", error);
        }
    }



    return (

        <div>
            <p> Usuarios registrados</p>

            <div className="show-register-table">
                <div className="structure-table-v w-3">
                    <p className="colum-components-admin-print-register">
                        ID
                    </p>
                </div>
                <div className="structure-table-v w-7">
                    <p className="colum-components-admin-print-register">
                        Nombre
                    </p>
                </div>
                <div className="structure-table-v">

                    <p className="colum-components-admin-print-register w-16">
                        Fecha creación
                    </p>
                </div>
            </div>

            {result?.map(run => {
                return (
                    <div className="show-register-table">
                        <div className="structure-table-v w-3">
                            <p className="colum-components-admin-print-register" key={`id-${run.id}`}>
                                {run.id}
                            </p>
                        </div>
                        <div className="structure-table-v w-7">
                            <p className="colum-components-admin-print-register" key={`title-${run.id}`}>
                                {run.title}
                            </p>
                        </div>
                        <div className="structure-table-v">
                            <p className="colum-components-admin-print-register w-16" key={`createdAt-${run.id}`}>
                                {run.createdAt}
                            </p>
                        </div>
                        <div className="structure-table-v">
                            <button className="deleteButton colum-components-admin-print-register w-9" onClick={() => deleteuser(run.id)}><p>Borrar usuario</p></button>
                        </div>


                    </div>
                )
            })}

            <button onClick={ () => addpage()}>
                +
        </button>

        <div>
            {userdelete}
        </div>
        </div>
    )



}


export default ShowUsers;
