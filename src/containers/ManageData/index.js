import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const ManageData = () => {
  const [dataktp, setdataktp] = useState([]);

  useEffect(() => {
    _getdataktp();
  }, []);

  const _getdataktp = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_BACKEND_URL}/ktp`);
    setdataktp(response.data.data);
    console.log(response.data);
  };

  const deletedataktp = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BACKEND_URL}/ktp/${id}`);
      _getdataktp();
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
          <div class="col-sm-8">
            <h1 className="fs-4 fw-bold"> Manage Data KTP </h1>
            <div className="mt-4">
              <table class="table caption-top">
                <thead>
                  <tr>
                    <th scope="col"> No </th>
                    <th scope="col"> NIK </th>
                    <th scope="col"> Nama </th>
                    <th scope="col"> Status </th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {dataktp.map((item, index) => (
                    <tr>
                      <th scope="row"> {index + 1} </th>
                      <td> {item.nik} </td>
                      <td> {item.name} </td>
                      <td> {item.status} </td>
                      <td>
                        <Link
                          to={`details/${item.id}`}
                          className="btn btn-success"
                        >
                          Details
                        </Link>
                      
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageData;
