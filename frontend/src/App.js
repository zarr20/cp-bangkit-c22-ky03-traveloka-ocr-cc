import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/styles.css";
import { Dashboard, Login, ManageData, Manageadmin } from "./containers";
import Addadmin from "./containers/ManageAdmin/Addadmin";
import Editadmin from "./containers/ManageAdmin/Editadmin";
import Editdataktp from "./containers/ManageData/EditDataktp";
import Detailsdataktp from "./containers/ManageData/DetailsDataktp";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/manage-data" element={<ManageData />} />
        <Route exact path="/manage-admin" element={<Manageadmin />} />
        <Route exact path="manage-admin/add" element={<Addadmin />} />
        <Route exact path="manage-admin/edit/:id" element={<Editadmin />} />
        <Route exact path="manage-data/edit/:id" element={<Editdataktp />} />
        <Route
          exact
          path="manage-data/details/:id"
          element={<Detailsdataktp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
