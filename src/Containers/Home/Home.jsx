import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.scss';





const Home = () => {

    let navigate = useNavigate();


    const [datosusuario, setDatosUsuarios] = useState("");
    const [userfounds, setuserfounds] = useState([]);
    const [namemorerepeat, setnamemorerepeat] = useState("");
    const [users, setusers] = useState("");
    let filtered = "";


    const [msgError, setmsgError] = useState("");


    useEffect(() => {
        take_registers();

    }, []);


    const take_registers = async () => {
        let res = await axios.get("https://dynamiza-back-end.herokuapp.com/movies/");
        setusers(res.data);
    };



    const writeuser = (e) => {


        // console.log("e.target.value: ", e)
        if (e.target.value != "") {//no me funciona este if
            console.log("entro: ", e.target.value);

            filtered = users.filter(word => {
                console.log("word: ", word);
                return word.title.toLowerCase().match(e.target.value.toLowerCase());
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
                                    <div  className="div-table-show-search">
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
                                    <div  className="div-table-show-search" key={run.id}>
                                        {run.title}
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
            :<p className="no-data">No hay datos con esta búsqueda</p>
                    }
        </div>
    )



}


export default Home;
