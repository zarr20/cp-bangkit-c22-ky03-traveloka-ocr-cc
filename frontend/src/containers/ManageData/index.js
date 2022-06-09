import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link }
from "react-router-dom";


import HeaderAdmin from "../../components/Admin/header";
import NavAdmin from "../../components/Admin/navigation";

const ManageData = () => {
    const [dataktp, setdataktp] = useState([]);

    useEffect(() => {
        _getdataktp();
    }, []);

    const _getdataktp = async() => {
        const response = await axios.get('http://localhost:5000/dataktp');
        setdataktp(response.data);
        console.log(response.data);
    }

    const deletedataktp = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/dataktp/${id}`);
            _getdataktp();
        } catch (error) {
            console.log(error);

        }
    }

    return ( 
        <div >
        <HeaderAdmin / >
        <div className = "container mt-3" >
        <div className = "row" >
        <NavAdmin / >
        <div class = "col-sm-8" >
        <h1 className = "fs-4 fw-bold" > Manage Data KTP </h1> 
        <div className = "mt-4" >
        <table class = "table caption-top" >
        <thead >
        <tr >
        <th scope = "col" > No </th> 
        <th scope = "col" > NIK </th> 
        <th scope = "col" > Nama </th>  
        <th scope = "col" > Status </th>  
        <th scope = "col" >  </th> 
        </tr > 
        </thead> 
        <tbody > {
            dataktp.map((dataktp, index) => ( 
                <tr>
                <th scope = "row" > { index + 1 } </th> 
                <td> { dataktp.nik } </td> 
                <td> { dataktp.name } </td>
                <td> { dataktp.status } </td>
                <td>
                <Link to = {
                    `details/${dataktp.id}`
                }
                className = "btn btn-success" >  Details </Link >
                {/* <button onClick = {
                    () => deletedataktp(admin.id)
                }
                className = "btn btn-danger" > <i class = "bi bi-trash" > </i> </button> */}

                {/* <Link to = {
                    `edit/${dataktp.id}`
                }
                className = "btn btn-light" > < i class = "bi bi-pen" > </i></Link >  */}
                </td> 
                 </tr>
            ))} 
            
        </tbody> 
        </table > 
        </div>

         
        </div> 

        </div> 
        </div> 
        </div>
    );
};

export default ManageData;