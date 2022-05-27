import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adddataktp = () => {
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

        const savedataktp = async(e) => {
            e.preventDefault();
            try {
                await axios.post('http://localhost:5000/dataktp', {
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
                Navigate("/");
            } catch (error) {
                console.log(error);
            }
        };
 
        return (
            <div className="columns mt-5 is-centered">
                <div className="column is-hals"></div>
                <form onSubmit={saveUser}>
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
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Golongan Darah</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Alamat</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Agama</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Status Perkawinan</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Pekerjaan</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Kewarganegaraan</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Kode Pos</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>Save</button>
                    </div>
                </form>
            </div>
            
          );
        };
        export default Adddataktp;