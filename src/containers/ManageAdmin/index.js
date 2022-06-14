import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate as useHistory } from "react-router-dom";
// import { _getadmin } from "../../API/dataktp/getadmin";
import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";
import jwt_decode from "jwt-decode";
import axios from "axios";

const ManageAdmin = () => {
  // const [admin, setadmin] = useState([]);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [admin, setadmin] = useState([]);
  const history = useHistory();

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${process.env.API_BACKEND_URL}/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        history.push("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${process.env.API_BACKEND_URL}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
    _getadmin();
    console.log(admin);
  }, []);

  // useEffect(() => {
  //   _getadmin();
  // }, []);

  // const _getadmin = async () => {
  //   const response = await axiosJWT.get("http://localhost:5000/admin", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log(response.data);
  //   setadmin(response.data);
  // };
   const _getadmin = async () => {
    const response = await axios.get("http://localhost:5000/admin", {
    
    });
    console.log(response.data);
    setadmin(response.data);
  };

  const deleteadminHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/${id}`);
      _getadmin();
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
              <h1 className="fs-4 fw-bold"> Manage Admin</h1>
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
                  {admin.map((user, index) => (
                    <tr>
                      <th scope="row"> {index + 1} </th>
                      <td> {user.name} </td>
                      <td> {user.email} </td>
                      <td> {user.tlp} </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button
                            onClick={() => deleteadminHandler(user.id)}
                            className="btn btn-danger"
                          >
                            {" "}
                            <i class="bi bi-trash"> </i>
                          </button>

                          <Link
                            to={`edit/${user.id}`}
                            className="btn btn-light"
                          >
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

export default ManageAdmin;
