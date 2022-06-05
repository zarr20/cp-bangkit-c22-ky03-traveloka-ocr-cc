import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate as useHistory } from "react-router-dom";

import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    refreshToken();
    // getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
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
        const response = await axios.get("http://localhost:5000/token");
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

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  return (
    <div>
      <HeaderAdmin />

      <div className="container mt-3">
        <div className="row">
          <NavAdmin />

          <div class="col-sm-8">
            <div className="d-flex gap-3">
              <div className="shadow-sm p-3 mb-5 rounded px-4 bg-dark text-white">
                <span className="fs-3 fw-bold ">{expire}</span>
                <div>identified this month</div>
              </div>
              <div className="shadow-sm p-3 mb-5  rounded px-4 bg-danger text-white">
                <span className="fs-3 fw-bold ">5000</span>
                <div>not identified</div>
              </div>
              <div className="shadow-sm p-3 mb-5 bg-body rounded px-4">
                <span className="fs-3 fw-bold">5000</span>
                <div>identification request</div>
              </div>
            </div>

           
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
