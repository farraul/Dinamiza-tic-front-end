import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer'



function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
  
        </Routes>
        
        <Footer/>
      </BrowserRouter>






    </div>
  );
}

export default App;
