import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './show_registers.scss';


const ShowUsers = () => {
    const history = useNavigate();


    const [current_index, setcurrent_index] = useState(-1);
    const [current_page, setcurrent_page] = useState(0);
    const [users_update, setusers_update] = useState({

        name: '',
        id: ''
    });

    const [users, setusers] = useState([""]);
    const [result, setresult] = useState([]);
    const [max_pages, set_maxpages] = useState([]);
    const [userdelete, setuserdelete] = useState([]);

    let addcurrent_index = -1;
    let addcurrent_page = 0;

    useEffect(() => {
        take_registers();
    }, []);

    const take_registers = async () => {
        let res = await axios.get("https://dynamiza-back-end.herokuapp.com/users/");
        setusers(res.data);
    };

    useEffect(() => {
        const length_users = users.length;
        set_maxpages(Math.ceil(length_users / 2))// númnero máximo de páginas a mostrar, redondea a la alta el ceil
        addpage();
    }, [users]);

    const addpage = () => {
        if (current_page <= max_pages) {
            addcurrent_page = current_page + 1;
            addcurrent_index = current_index + 2;

            setcurrent_index(addcurrent_index);
            setcurrent_page(addcurrent_page);

            const result_data = users.filter((user, index) => {
                if (index > current_index - 2 && index <= current_index) {
                    return user
                }
            });
            setresult(result_data);
        }
    }

     const userHandler = (e) => {
        setusers_update({ ...users_update, [e.target.name]: e.target.value });
    }


    const send_data_update_user = async () => {
        let body = {
            name: users_update.name,
            id: users_update.id,
        }

        try {
            let res = await axios.put(`https://dynamiza-back-end.herokuapp.com/users/${users_update.id}`,body);


        } catch (error) {
            console.log(error)
        }
    }


    const reducepage = () => {
        addcurrent_page = current_page - 1;
        addcurrent_index = current_index - 2;

        if (current_page >= 0) {
            setcurrent_index(addcurrent_index);
            setcurrent_page(addcurrent_page);
            const result_data = users.filter((user, index) => {

                if (index > current_index - 2 && index <= current_index) {
                    return user
                }
            });
            setresult(result_data);
        }
    }

    const deleteuser = async (data) => {
        try {
            let res = await axios.delete(`https://dynamiza-back-end.herokuapp.com/users/${data}`);
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
                    <div className="show-register-table" key={`id-${run.id}`}>
                        <div className="structure-table-v w-3">
                            <p className="colum-components-admin-print-register">
                                {run.id}
                            </p>
                        </div>
                        <div className="structure-table-v w-7">
                            <p className="colum-components-admin-print-register">
                                {run.name}
                            </p>
                        </div>
                        <div className="structure-table-v">
                            <p className="colum-components-admin-print-register w-16" >
                                {run.createdAt}
                            </p>
                        </div>
                        <div className="structure-table-v">
                            <button className="deleteButton colum-components-admin-print-register w-9" onClick={() => deleteuser(run.id)} ><p>Borrar usuario</p></button>
                        </div>


                    </div>
                )
            })}

            <div className="buttons-less-and-more">
            <button className="buton-more-and-less-inside" onClick={() => reducepage()}>
                ←
            </button>
            <button className="buton-more-and-less-inside" onClick={() => addpage()}>
                →
            </button>
            <div>
                {userdelete}
            </div>
            </div>

            <div className="update-data">

            <div id="container-form-show">
                <div className="container-form-2fields mt-6">
                    <div className="input-form-register-fields">
                        <input className="input-form-register" type='text' name='id' title='id' lenght='30' onChange={e => userHandler(e)} placeholder='Escribe la ID del usuario que quieres actualizar' />
                        <input className="input-form-register" type='text' name='name' title='name' lenght='30' onChange={e => userHandler(e)} placeholder='Como lo quieres llamar ahora' />

                    </div>
                </div>
                <button className="button-register" onClick={() => send_data_update_user()}>Cambiar nombre de usuario</button>
            </div>

            </div>
        </div>
    )
}


export default ShowUsers;
