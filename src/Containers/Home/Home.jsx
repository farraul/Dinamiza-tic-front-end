import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';





const Home = () => {

    let navigate = useNavigate();


    const [msgError, setmsgError] = useState("");
   

    useEffect(() => {


    }, []);


    




  
    return ( 
    <div>
       <p> esta es la home</p>
        </div>
    )



}


export default Home;
