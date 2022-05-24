import React from 'react'

function HeaderAdmin() {
  return (
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
  )
}

export default HeaderAdmin