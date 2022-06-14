import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const Editadmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tlp, setTelepon] = useState("");
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getadminById();
  }, []);

  const updateadmin = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.API_BACKEND_URL}/admin/${id}`, {
        name,
        email,
        tlp,
      });
      Navigate("/manage-admin");
    } catch (error) {
      console.log(error);
    }
  };

  const getadminById = async () => {
    const response = await axios.get(`${process.env.API_BACKEND_URL}/admin/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
  };

  return (
    <>
      <HeaderAdmin />

      <div className="container mt-3">
        <div className="row">
          <NavAdmin />
          <div class="col-sm-8">
          <h1 className="fs-4 fw-bold"> Edit Admin </h1>

            <div className="columns mt-2 is-centered">
              <div className="column is-hals"></div>
              <form onSubmit={updateadmin}>
                <div className="mb-2 row">
                  <label className="col-sm-2 col-form-label">Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="mb-2 row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mb-2 row">
                  <label className="col-sm-2 col-form-label">Telepon</label>
                  <div className="control">
                    <input
                      type="text"
                      className="form-control"
                      value={tlp}
                      onChange={(e) => setTelepon(e.target.value)}
                      placeholder="Telepon"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editadmin;
