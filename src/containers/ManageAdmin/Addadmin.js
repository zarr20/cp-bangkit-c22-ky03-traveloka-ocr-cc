import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const Addadmin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate();

    const saveadmin = async(e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/admin", {
                name,
                email,
            });
            Navigate("/manage-admin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
      <>
        <HeaderAdmin />
  
        <div className="container mt-3">
          <div className="row">
            <NavAdmin />
            <div class="col-sm-8">
              <h1 className="fs-4 fw-bold"> Add Admin </h1>
  
              <div className="columns mt-2 is-centered">
                <div className="column is-hals"></div>
                <form onSubmit={saveadmin}>
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
                  <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                      Save
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
  
  export default Addadmin;