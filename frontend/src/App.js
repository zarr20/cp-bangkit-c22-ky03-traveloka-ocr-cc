import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/styles.css';
import { Dashboard, Login, ManageData, ManageUser } from './containers';
import AddUser from "./containers/ManageUser/AddUser";
import EditUser from './containers/ManageUser/EditUser';
import Editdataktp from './containers/ManageData/EditDataktp';
import Detailsdataktp from './containers/ManageData/DetailsDataktp';


function App() {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route index element = { <Login/> }/> 
        <Route exact path = "/login"
        element = { < Login/ > }
        /> 
        <Route exact path = "/dashboard"
        element = { < Dashboard/ > }
        /> 
        <Route exact path = "/manage-data"
        element = { < ManageData/ > }
        /> 
        <Route exact path = "/manage-user"
        element = { < ManageUser/ > }
        />  
        <Route exact path = "manage-user/add"
        element = { < AddUser/ > }
        /> 
        <Route exact path = "manage-user/edit/:id"
        element = { < EditUser/ > }
        /> 
        <Route exact path = "manage-data/edit/:id"
        element = { < Editdataktp/ > }
        /> 
        <Route exact path = "manage-data/details/:id"
        element = { < Detailsdataktp/ > }
        />
        </Routes > 
        </BrowserRouter>
    );
}

export default App;