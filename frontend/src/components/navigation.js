import React from 'react'

import { Link, NavLink } from 'react-router-dom'

const Logout = async () => {
    try {
        await axios.delete('http://localhost:5000/logout');
        Navigate("/login");
    } catch (error) {
        console.log(error);
    }
}

function NavAdmin() {
    return (
        <div className="sideNav col-sm-3">
            <NavLink exact={true} activeClassName='active' to='/dashboard'>
                <i class="bi bi-speedometer2 me-2"></i> Dashboard
            </NavLink>

            <NavLink exact={true} activeClassName='active' to='/manage-data'>
                <i class="bi bi-list-check me-2"></i> Manage Data
            </NavLink>

            <NavLink exact={true} activeClassName='active' to='/manage-user'>
                <i class="bi bi-people me-2"></i> Manage User
            </NavLink>

            <button onClick={Logout}><span className="align-items-center" style={{ color: "red" }}><i class="bi bi-box-arrow-right me-2"></i>Logout</span></button>
        
              
        </div>
    )
}

export default NavAdmin