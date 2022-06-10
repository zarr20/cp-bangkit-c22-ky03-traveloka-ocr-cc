import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function NavAdmin() {
  const Navigate = useNavigate();

  const Logout = async () => {
    try {
      localStorage.removeItem("token");
      await axios.delete("http://localhost:5000/admin/logout");

      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sideNav col-sm-3">
      <NavLink exact={true} activeClassName="active" to="/dashboard">
        <i class="bi bi-speedometer2 me-2"></i> Dashboard
      </NavLink>

      <NavLink exact={true} activeClassName="active" to="/manage-data">
        <i class="bi bi-list-check me-2"></i> Manage Data
      </NavLink>

      <NavLink exact={true} activeClassName="active" to="/manage-admin">
        <i class="bi bi-people me-2"></i> Manage Admin
      </NavLink>

      <a onClick={Logout}>
        <span style={{ color: "red" }}>
          <i class="bi bi-box-arrow-right me-2"></i>Logout
        </span>
      </a>
    </div>
  );
}

export default NavAdmin;
