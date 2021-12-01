import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const ShowUsers = () => {

    let navigate = useNavigate();


    const [users, setusers] = useState("");


    useEffect(() => {
        take_registers();

    }, []);

    const take_registers = async () => {
        let res = await axios.get("https://dynamiza-back-end.herokuapp.com/movies/");
        setusers(res.data.results);
        console.log("datos", res.data.results);


    };






    return (
        <div>
            <p> esta es la pagina para ver registros</p>
        </div>
    )



}


export default ShowUsers;
