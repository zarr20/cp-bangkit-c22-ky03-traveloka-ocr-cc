import React from 'react'

import { Link, NavLink } from 'react-router-dom'

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

            <Link to='/auth=logout'><span className="align-items-center" style={{ color: "red" }}><i class="bi bi-box-arrow-right me-2"></i>Logout</span></Link>
        
              
        </div>
    )
}

export default NavAdmin