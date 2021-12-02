import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';


const Home = () => {

    const [userfounds, setuserfounds] = useState([]);
    const [users, setusers] = useState("");
    let filtered = "";

    useEffect(() => {
        take_registers();
    }, []);


    const take_registers = async () => {
        let res = await axios.get("https://dynamiza-back-end.herokuapp.com/users/");
        setusers(res.data);
    };


    const writeuser = (e) => {

        if (e.target.value != "") {
            console.log("entro: ", e.target.value);

            filtered = users.filter(word => {
                console.log("word: ", word);
                return word.name.toLowerCase().match(e.target.value.toLowerCase());
            })
            
            setuserfounds(filtered);
            console.log("userfounds.length", userfounds.length)
        } else {
            setuserfounds("");
        }
    }

    return (
        <div>

            <input className="imput-search" type="text" name="film" onChange={writeuser} title="film" lenght="30" placeholder="Buscar usuario por nombre" />

            {userfounds != "" ?
                <div className="table-home-print top-table">
                    <div className="colum-home-print-title">
                        <div className="div-table-show-row-title">
                            <div className="div-table-show-search">
                                Id
                            </div>
                            <div className="div-table-show-search">
                                Nombre principal
                            </div>
                            <div className="div-table-show-search">
                                Fecha creación
                            </div>
                        </div>
                    </div>

                    <div className="table-home-print">
                        <div className="colum-home-print">

                            {userfounds?.map(run => {
                                return (
                                    <div className="div-table-show-row">
                                        <div className="div-table-show-search" key={run.id}>
                                            {run.id}
                                        </div>
                                        <div className="div-table-show-search" key={run.id}>
                                            {run.name}
                                        </div>
                                        <div className="div-table-show-search" key={run.id}>
                                            {run.createdAt}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            : <p className="no-data">No hay datos con esta búsqueda</p>
            }
        </div>
    )
}


export default Home;
