import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const Home = () => {

    let navigate = useNavigate();


    const [msgError, setmsgError] = useState("");
   

    useEffect(() => {


    }, []);


    




  
    return ( 
    <div>
       <p> hola imprime</p>
        </div>
    )



}


export default Home;
