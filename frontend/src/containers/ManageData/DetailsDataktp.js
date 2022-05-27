import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Detailsdataktp = () => {
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
        
            <div className="field">
                <label className="label">NIK</label>
                <div className="control">
                    <input type="text" className="input" value={nik}  placeholder="NIK"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                    <input type="text" className="input" value={name}  placeholder="Nama" />
                </div>
            </div>
            <div className="field">
                <label className="label">Tempat</label>
                <div className="control">
                    <input type="text" className="input" value={tempat}  placeholder="Tempat" />
                </div>
            </div>
            <div className="field">
                <label className="label">Tanggal Lahir</label>
                <div className="control">
                    <input type="text" className="input" value={tgl_lahir}  placeholder="Tanggal Lahir"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Jenis Kelamin</label>
                <div className="control">
                    <input type="text" className="input" value={jenis_kelamin}  placeholder="Jenis Kelamin"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Golongan Darah</label>
                <div className="control">
                    <input type="text" className="input" value={gol_darah}  placeholder="Golongan Darah"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                    <input type="text" className="input" value={alamat}  placeholder="Alamat"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Agama</label>
                <div className="control">
                    <input type="text" className="input" value={agama}  placeholder="Agama"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Status Perkawinan</label>
                <div className="control">
                    <input type="text" className="input" value={status_perkawinan}  placeholder="Status Perkawinan"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Pekerjaan</label>
                <div className="control">
                    <input type="text" className="input" value={pekerjaan}  placeholder="Pekerjaan"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Kewarganegaraan</label>
                <div className="control">
                    <input type="text" className="input" value={kewarganegaraan}  placeholder="Kewarganegaraan"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Kode Pos</label>
                <div className="control">
                    <input type="text" className="input" value={kode_pos}  placeholder="Kode Pos"/>
                </div>
            </div>
    </div>
    
  )
}

export default Detailsdataktp;