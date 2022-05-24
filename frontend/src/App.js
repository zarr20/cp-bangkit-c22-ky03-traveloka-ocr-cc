
import React from 'react';
import {BrowserRouter , Route,  Routes } from 'react-router-dom';
import './assets/css/styles.css';
import { Dashboard, Login, ManageData } from './containers';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/manage-data" element={<ManageData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
