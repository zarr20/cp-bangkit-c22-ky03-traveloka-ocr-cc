import React from "react";

import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const ManageData = () => {
  return (
    <div>
      <HeaderAdmin />

      <div className="container mt-3">
        <div className="row">
          <NavAdmin />

          <div class="col-sm-8">
            <h1 className="fs-4 fw-bold">Manage User</h1>
            <div className="mt-4">
            <button className="btn btn-primary"><i class="bi bi-person-plus me-3"></i> Add</button>
            <table class="table caption-top">
              <thead>
                <tr>
                  <th scope="col">No</th>
                    <th scope="col">NIK</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Tempat, Tanggal Lahir</th>
                    <th scope="col">Jenis Kelamin</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Kode Pos</th>
                    <th scope="col">Agama</th>
                    <th scope="col">Status Perkawinan</th>
                    <th scope="col">Pekerjaan</th>
                    <th scope="col">Kewarganegaraan</th>
                    <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="d-flex gap-2">
                    <button className="btn btn-danger"><i class="bi bi-trash"></i></button>
                    <button className="btn btn-light"><i class="bi bi-pen"></i></button>
                    </div>
                    
                  </td>
                </tr>
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
