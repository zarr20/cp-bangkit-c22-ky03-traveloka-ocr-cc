import React from 'react'

const Dashboard = () => {
  return (
    <div>
    <header style={{ background: "#4c0bce", boxShadow: "#0000002e 0px 3px 4px", color: "white" }}>
      <div className="container d-flex " style={{ height: "60px", "justify-content": "space-between", "align-items": "center" }}>
        <div id="logo">
          <img src="/logo-identify.svg" style={{ "max-height": "40px" }} />
        </div>
        <div id="navigation" className="d-flex">
          <div>

          </div>


        </div>
      </div>
    </header>
    <div className="container mt-3">
      <div className="row">
        <div className="sideNav col-sm-3">
          <div className='active'><i class="bi bi-speedometer2 me-2"></i> Dashboard</div>
          <div ><i class="bi bi-list-check me-2"></i>Manage Data</div>
          <div ><i class="bi bi-people me-2"></i>Manage User</div>
          <div>
            <span className="align-items-center" style={{color:"red"}}><i class="bi bi-box-arrow-right me-2"></i>Logout</span>
          </div>
        </div>
        <div class="col-sm-8">col-sm-8</div>

      </div>
    </div>
  </div>
  )
}

export default Dashboard