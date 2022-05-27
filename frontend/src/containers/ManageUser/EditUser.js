import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [telepon, setTelepon] = useState("");
const Navigate = useNavigate();
const {id} = useParams();

useEffect(()=> {
    getUserById();
}, []);

const updateUser = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        telepon
    });
    Navigate("/manage-user");
} catch(error) {
    console.log(error);
}
};

const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setTelepon(response.data.telepon);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-hals"></div>
        <form onSubmit={updateUser}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
            </div>
            <div className="field">
                <label className="label">Telepon</label>
                <div className="control">
                    <input type="text" className="input" value={telepon} onChange={(e) => setTelepon(e.target.value)} placeholder="Telepon" />
                </div>
            </div>
            <div className="field">
                <button type='submit' className='button is-success'>Update</button>
            </div>
        </form>
    </div>
    
  )
}

export default EditUser;