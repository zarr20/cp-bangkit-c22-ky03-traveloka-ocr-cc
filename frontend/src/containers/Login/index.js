import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";

const Login = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Data Palsu
  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "user",
      password: "user"
    }
  ];

  // const errors = {
  //   uname: "Invalid username or password",
  //   pass: "Invalid username or password"
  // };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="alert alert-danger" role="alert">
        {errorMessages.message}
      </div>
    );

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        // console.log('password salah');
        setErrorMessages({ name: "", message: "Invalid username or password" });

      } else {
        // console.log('berhasil');
        setIsSubmitted(true);

      }
    } else {
      // console.log('not found');
      setErrorMessages({ name: "", message: "Invalid username or password" });
    }
  };

  const renderLogin = (
    <div className='d-flex aligns-item-center vh-100'>
      <div className="m-auto text-center" style={{ maxWidth: "350px", width: "100%" }}>
        <form onSubmit={handleSubmit}>
          <img src="/logo-identify-purple.svg" className="mb-4" style={{ "max-height": "45px" }} />
          {renderErrorMessage("")}
          <div className='form-floating '>
            <input className='form-control rounded-top rounded-0 ' style={{ marginBottom: "-1px" }} name="uname" />
            <label for="floatingInput">Username</label>
          </div>
          <div className='form-floating mb-3'>
            <input className='form-control rounded-bottom rounded-0' name="pass" />
            <label for="floatingInput">Password</label>
          </div>
          
          <button type="submit" class=" w-100  btn btn-outline-dark fw-bold">Login</button>
        </form>

        <div className='d-flex justify-content-center mt-5'>
          <img src="/assets/img/bangkit-logo.png" style={{ "max-height": "35px" }} />
          <img src="/assets/img/traveloka-logo.png" style={{ "max-height": "35px" }} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {isSubmitted ? <Navigate replace to="/dashboard" /> : renderLogin}
    </div>
  )
}

export default Login