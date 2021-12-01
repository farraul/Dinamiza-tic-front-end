import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './show_registers.scss';






const ShowUsers = () => {

    let navigate = useNavigate();


    const [users, setusers] = useState([]);


    useEffect(() => {
        take_registers();

    }, []);


    useEffect(() => {
        console.log("users:: ", users);
    }, [users]);



    const take_registers = async () => {
        let res = await axios.get("https://dynamiza-back-end.herokuapp.com/movies/");
        setusers(res.data);

    };



    return (

        <div>
            <p> Usuario registrados</p>

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

            {users?.map(run => {
                return (
                    <div className="show-register-table">
                        <div className="structure-table-v w-3">
                            <p className="colum-components-admin-print-register" key={run.id}>
                                {run.id}
                            </p>
                        </div>
                        <div className="structure-table-v w-7">
                            <p className="colum-components-admin-print-register" key={run.id}>
                                {run.title}
                            </p>
                        </div>
                        <div className="structure-table-v">
                            <p className="colum-components-admin-print-register w-16" key={run.id}>
                                {run.createdAt}
                            </p>
                        </div>


                    </div>
                )
            })}

        </div>
    )



}


export default ShowUsers;
