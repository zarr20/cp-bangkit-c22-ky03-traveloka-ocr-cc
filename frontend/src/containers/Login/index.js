import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { update } from "../../features/authSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // const { isLoggedIn } = useSelector(state => state.auth);
  // useEffect(() => {
  //   isLoggedIn === true ? Navigate("/dashboard"): "";
  // }, []);
  // console.log(isLoggedIn);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      Navigate("/dashboard");
    }
}, []);

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post("http://localhost:5000/login", {
        email: email,
        password: Password,
      })
      .then((res) =>  {
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      });
      Navigate("/dashboard");
      
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="d-flex aligns-item-center vh-100">
     

      <div
        className="m-auto text-center"
        style={{ maxWidth: "350px", width: "100%" }}
      >
        <form onSubmit={Auth}>
         
          <img
            src="/logo-identify-purple.svg"
            className="mb-4"
            style={{ maxHeight: "45px" }}
          />
          <div className="form-floating ">
            <input
              className="form-control rounded-top rounded-0 "
              name="uname"
              style={{ marginBottom: "-1px" }}
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-bottom rounded-0"
              name="pass"
              type="password"
              value={Password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <label for="floatingInput">Password</label>
          </div>

          <button type="submit" className=" w-100  btn btn-outline-dark fw-bold">
            Login
          </button>

          <p className="py-2 has-text-centered">{msg}</p>
        </form>

        <div className="d-flex justify-content-center mt-5">
          <img
            src="/assets/img/bangkit-logo.png"
            style={{ maxHeight: "35px" }}
          />
          <img
            src="/assets/img/traveloka-logo.png"
            style={{ maxHeight: "35px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;