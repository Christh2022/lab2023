import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Tournee from './pages/Tournee';
import { useState } from 'react';
import Error from './pages/Error';
import Actus from './pages/Actus';
import Boutique from './pages/Boutique';


function App() {
  const [isActive, setIsActive] = useState(false);
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home setIsActive={setIsActive} isActive={isActive}/>}/>
            <Route path='/tournee' element={<Tournee setIsActive={setIsActive} isActive={isActive}/>}/>
            <Route path='/actus' element={<Actus setIsActive={setIsActive} isActive={isActive}/>}/>
            <Route path='/boutique' element={<Boutique setIsActive={setIsActive} isActive={isActive}/>}/>
            <Route path='/*' element={<Error setIsActive={setIsActive}/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;