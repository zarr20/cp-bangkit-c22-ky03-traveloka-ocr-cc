import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/styles.css';
import { Dashboard, Login, ManageData, ManageUser } from './containers';
import AddUser from "./containers/ManageUser/AddUser";
import EditUser from './containers/ManageUser/EditUser';


function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route index element = { < Login / > }
        /> <
        Route exact path = "/login"
        element = { < Login / > }
        /> <
        Route exact path = "/dashboard"
        element = { < Dashboard / > }
        /> <
        Route exact path = "/manage-data"
        element = { < ManageData / > }
        /> <
        Route exact path = "/manage-user"
        element = { < ManageUser / > }
        />  <
        Route exact path = "manage-user/add"
        element = { < AddUser / > }
        /> <
        Route exact path = "manage-user/edit/:id"
        element = { < EditUser / > }
        />< /
        Routes > <
        /BrowserRouter>
    );
}

export default App;