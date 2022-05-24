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
          <div class="col-sm-8">Welcome, Admin User</div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Identified This Month</th>
                <th scope="col">Not Identified</th>
                <th scope="col">Identified Request</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
