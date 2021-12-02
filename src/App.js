import './App.scss';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import CreateUser from './Containers/add_register/add_register';
import ShowUsers from './Containers/show_registers/show_registers';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/regristrar-usuario" element={<CreateUser/>}/>
          <Route path="/ver-registros" element={<ShowUsers/>}/>
  
        </Routes>
        
        <Footer/>
      </BrowserRouter>






    </div>
  );
}

export default App;
