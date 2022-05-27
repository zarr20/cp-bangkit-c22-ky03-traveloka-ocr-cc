import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editdataktp = () => {
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
const {id} = useParams();

useEffect(()=> {
    getdataktpById();
}, []);

const updatedataktp = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/dataktp/${id}`, {
        nik,
        name,
        tempat,
        tgl_lahir,
        jenis_kelamin,
        gol_darah,
        alamat,
        agama,
        status_perkawinan,
        pekerjaan,
        kewarganegaraan,
        kode_pos
    });
    Navigate("/manage-data");
} catch(error) {
    console.log(error);
}
};

const getdataktpById = async () => {
    const response = await axios.get(`http://localhost:5000/dataktp/${id}`);
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
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-hals"></div>
        <form onSubmit={updatedataktp}>
            <div className="field">
                <label className="label">NIK</label>
                <div className="control">
                    <input type="text" className="input" value={nik} onChange={(e) => setnik(e.target.value)} placeholder="NIK"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                    <input type="text" className="input" value={name} onChange={(e) => setname(e.target.value)} placeholder="Nama" />
                </div>
            </div>
            <div className="field">
                <label className="label">Tempat</label>
                <div className="control">
                    <input type="text" className="input" value={tempat} onChange={(e) => settempat(e.target.value)} placeholder="Tempat" />
                </div>
            </div>
            <div className="field">
                <label className="label">Tanggal Lahir</label>
                <div className="control">
                    <input type="text" className="input" value={tgl_lahir} onChange={(e) => settgl_lahir(e.target.value)} placeholder="Tanggal Lahir"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Jenis Kelamin</label>
                <div className="control">
                    <input type="text" className="input" value={jenis_kelamin} onChange={(e) => setjenis_kelamin(e.target.value)} placeholder="Jenis Kelamin"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Golongan Darah</label>
                <div className="control">
                    <input type="text" className="input" value={gol_darah} onChange={(e) => setgol_darah(e.target.value)} placeholder="Golongan Darah"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                    <input type="text" className="input" value={alamat} onChange={(e) => setalamat(e.target.value)} placeholder="Alamat"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Agama</label>
                <div className="control">
                    <input type="text" className="input" value={agama} onChange={(e) => setagama(e.target.value)} placeholder="Agama"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Status Perkawinan</label>
                <div className="control">
                    <input type="text" className="input" value={status_perkawinan} onChange={(e) => setstatus_perkawinan(e.target.value)} placeholder="Status Perkawinan"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Pekerjaan</label>
                <div className="control">
                    <input type="text" className="input" value={pekerjaan} onChange={(e) => setpekerjaan(e.target.value)} placeholder="Pekerjaan"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Kewarganegaraan</label>
                <div className="control">
                    <input type="text" className="input" value={kewarganegaraan} onChange={(e) => setkewarganegaraan(e.target.value)} placeholder="Kewarganegaraan"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Kode Pos</label>
                <div className="control">
                    <input type="text" className="input" value={kode_pos} onChange={(e) => setkode_pos(e.target.value)} placeholder="Kode Pos"/>
                </div>
            </div>
            <div className="field">
                <button type='submit' className='button is-success'>Update</button>
            </div>
        </form>
    </div>
    
  )
}

export default Editdataktp;