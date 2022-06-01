import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const Detailsdataktp = () => {
  const [status, setstatus] = useState("");

  const [nik, setnik] = useState("");
  const [name, setname] = useState("");
  const [tempat, settempat] = useState("");
  const [tgl_lahir, settgl_lahir] = useState("");
  const [jenis_kelamin, setjenis_kelamin] = useState("");
  const [gol_darah, setgol_darah] = useState("");
  const [alamat, setalamat] = useState("");
  const [agama, setagama] = useState("");
  const [status_perkawinan, setstatus_perkawinan] = useState("");
  const [pekerjaan, setpekerjaan] = useState("");
  const [kewarganegaraan, setkewarganegaraan] = useState("");
  const [kode_pos, setkode_pos] = useState("");
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getdataktpById();
  }, []);

  const getdataktpById = async () => {
    const response = await axios.get(`http://localhost:5000/dataktp/${id}`);

    setstatus(response.data.status);

    setnik(response.data.nik);
    setname(response.data.name);
    settempat(response.data.tempat);
    settgl_lahir(response.data.tgl_lahir);
    setjenis_kelamin(response.data.jenis_kelamin);
    setgol_darah(response.data.gol_darah);
    setalamat(response.data.alamat);
    setagama(response.data.agama);
    setstatus_perkawinan(response.data.status_perkawinan);
    setpekerjaan(response.data.pekerjaan);
    setkewarganegaraan(response.data.kewarganegaraan);
    setkode_pos(response.data.kode_pos);
  };

  const terimaKTP = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/dataktp/terima/${id}`);
      getdataktpById();
    } catch (error) {
      console.log(error);
    }
  };

  const tolakKTP = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/dataktp/tolak/${id}`);
      getdataktpById();
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
            <h1 className="fs-4 fw-bold"> Detail </h1>

            <div className="row">
              <div className="col">
                <div className="d-flex mb-3 fw-bold">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Status
                  </span>
                  <span>: </span>
                  <span>{status}</span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>NIK</span>
                  <span>: </span>
                  <span>{nik}</span>
                </div>
                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>Nama</span>
                  <span>: </span>
                  <span>{name}</span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Tempat, Tanggal Lahir
                  </span>
                  <span>: </span>
                  <span>
                    {tempat}, {tgl_lahir}
                  </span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Jenis Kelamin
                  </span>
                  <span>: </span>
                  <span>{jenis_kelamin}</span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Golongan Darah
                  </span>
                  <span>: </span>
                  <span>{gol_darah}</span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Alamat
                  </span>
                  <span>: </span>
                  <span>{alamat}</span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Agama
                  </span>
                  <span>: </span>
                  <span>{agama}</span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Pekerjaan
                  </span>
                  <span>: </span>
                  <span>{pekerjaan}</span>
                </div>

                <div className="d-flex">
                  <span style={{ maxWidth: "150px", width: "100%" }}>
                    Kewarganegaraan
                  </span>
                  <span>: </span>
                  <span>{kewarganegaraan}</span>
                </div>

                { status == "menunggu" ?  
                <div className="mt-3">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => terimaKTP(id)}
                  >
                    Terima
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => tolakKTP(id)}
                  >
                    Tolak
                  </button>
                </div>
                 : ""}
              </div>

              <div className="col-5">
                <img
                  style={{ width: "100%" }}
                  src="https://miro.medium.com/max/1388/1*KXxj_GFYy9CwAOG-zkGf8g.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailsdataktp;