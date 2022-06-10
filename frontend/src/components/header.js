import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();

  const Logout = async () => {
    try {
        await axios.delete('http://localhost:5000/admin/logout');
        Navigate("/login");
    } catch (error) {
        console.log(error);
    }
}


function HeaderAdmin() {
  return (
    <header style={{ background: "#4c0bce", boxShadow: "#0000002e 0px 3px 4px", color: "white" }}>
      <div className="container d-flex " style={{ height: "60px", "justify-content": "space-between", "align-items": "center" }}>
        <div id="logo">
          <img src="/logo-identify.svg" style={{ "max-height": "40px" }} />
        </div>
        <div id="navigation" className="d-flex">
          <div>
          <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={Logout} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
          </div>
      

        </div>
      </div>
    </header>
  )
}
}
export default HeaderAdmin;