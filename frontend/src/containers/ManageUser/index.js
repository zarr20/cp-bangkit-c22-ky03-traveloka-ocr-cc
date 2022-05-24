import React from 'react'

import HeaderAdmin from '../../components/Admin/header'
import NavAdmin from '../../components/Admin/navigation'

const ManageUser = () => {
  return (
    <div>
      <HeaderAdmin />

      <div className="container mt-3">
        <div className="row">
          <NavAdmin />
          <div class="col-sm-8">col-sm-8</div>

        </div>
      </div>
    </div>
  )
}

export default ManageUser