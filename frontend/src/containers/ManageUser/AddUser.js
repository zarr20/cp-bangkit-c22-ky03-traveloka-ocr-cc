import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [tlp, settlp] = useState("");
const Navigate = useNavigate();

const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
        name,
        email,
        tlp
    });
    Navigate("/manage-user");
} catch(error) {
    console.log(error);
}
};

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-hals"></div>
        <form onSubmit={saveUser}>
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
                    <input type="text" className="input" value={tlp} onChange={(e) => settlp(e.target.value)} placeholder="Telepon" />
                </div>
            </div>
            <div className="field">
                <button type='submit' className='button is-success'>Save</button>
            </div>
        </form>
    </div>
    
  );
};

export default AddUser;