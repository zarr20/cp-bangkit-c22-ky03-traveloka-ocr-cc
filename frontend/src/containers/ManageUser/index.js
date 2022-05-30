import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { _getUsers } from "../../API/dataktp/getUsers";

import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const ManageUser = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    _getUsers();
  }, []);

  const _getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
    console.log(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      _getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderAdmin />

      <div className="container mt-3">
        <div className="row">
          <NavAdmin />
          <div class="col-sm-8 ">
              <div className="d-flex gap-3">
              <h1 className="fs-4 fw-bold"> Manage User </h1>
            <Link to={`add`} className="btn btn-primary">
                {" "}
                <i class="bi bi-person-plus me-3"> </i> Add
              </Link>
              </div>
           

            <div className="mt-3">
              
              <table class="table caption-top">
                <thead>
                  <tr>
                    <th scope="col"> No </th>
                    <th scope="col"> Nama </th>
                    <th scope="col"> Email </th>
                    <th scope="col"> No.Telepon </th>
                    <th scope="col"> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {users.map((user, index) => (
                    <tr>
                      <th scope="row"> {index + 1} </th>
                      <td> {user.name} </td>
                      <td> {user.email} </td>
                      <td> {user.tlp} </td>
                      <td>

                          <div className="d-flex gap-2">
                          <button
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-danger"
                        >
                          {" "}
                          <i class="bi bi-trash"> </i>
                        </button>

                        <Link to={`edit/${user.id}`} className="btn btn-light">
                          {" "}
                          <i class="bi bi-pen"> </i>
                        </Link>
                          </div>
                        


                      </td>
                      <td></td>
                    </tr>
                  ))}{" "}
                  {/* <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                  <div className="d-flex gap-2">
                                    <button className="btn btn-danger"><i class="bi bi-trash"></i></button>
                                    <button className="btn btn-light"><i class="bi bi-pen"></i></button>
                                  </div>

                                </td>
                              </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
