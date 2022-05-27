import React from "react";

import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const Dashboard = () => {
  return (
    <div>
      <HeaderAdmin />

      <div className="container mt-3">
        <div className="row">
          <NavAdmin />
          <div class="col-sm-8">
            <div className="d-flex gap-3">
              <div className="shadow-sm p-3 mb-5 rounded px-4 bg-dark text-white">
                <span className="fs-3 fw-bold ">5000</span>
                <div>
                identified this month
                </div>
               
              </div>
              <div className="shadow-sm p-3 mb-5  rounded px-4 bg-danger text-white">
                <span className="fs-3 fw-bold ">5000</span>
                <div>
                not identified
                </div>
               
              </div>
              <div className="shadow-sm p-3 mb-5 bg-body rounded px-4">
                <span className="fs-3 fw-bold">5000</span>
                <div>
                identification request
                </div>
               
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
