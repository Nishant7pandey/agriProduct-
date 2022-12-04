import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Component/Home';
import SignUp from './Component/Pages/Signup/index';
import Login from './Component/Pages/Login/index';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
